#!/usr/bin/env node
// Delivery orchestration only. Every legal answer is produced by the npm CLI.
import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { resolve, dirname, join } from 'node:path';
import { isDeepStrictEqual } from 'node:util';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const args=process.argv.slice(2);const at=args.indexOf('--law');const law=at<0?'law':args[at+1];
const json=p=>JSON.parse(readFileSync(join(root,p),'utf8'));
const hash=b=>'sha256:'+createHash('sha256').update(b).digest('hex');
const assert=(ok,label)=>{if(!ok)throw new Error(label)};
const version=JSON.parse(execFileSync(law,['version','--json'],{encoding:'utf8'}));
const pin=json('toolchain.lock.json');assert(version.tool===pin.cli.version,'CLI version differs from pin');
assert(pin.platforms.some(p=>p.binarySha256===version.binaryHash),'Native binary differs from npm runtime pin');
for(const row of [...json('source-pin.json').files,...json('CANON-MANIFEST.json').files]){
 const b=readFileSync(join(root,row.path));assert(b.length===row.size&&hash(b)===row.sha256,'Integrity: '+row.path);
}
for(const row of json('examples/index.json')){
 const folder=join(root,'examples',row.name);const req=json('examples/'+row.name+'/request.json');const world=json('registry/worlds/'+row.world+'.json');assert(isDeepStrictEqual(req.ir,world),'Request world: '+row.name);
 const expected=json('examples/'+row.name+'/result.json');
 for(let i=0;i<2;i++){
  const actual=JSON.parse(execFileSync(law,['eval',folder],{encoding:'utf8',maxBuffer:32*1024*1024}));
  assert(isDeepStrictEqual(actual,expected),'Canonical replay: '+row.name);
 }
 console.log('PASS',row.name,row.evaluationStatus,row.truthStatus??row.resultKind);
}
const summary=JSON.parse(execFileSync(law,['inspect',join(root,'examples/referendum-passes/result.json'),'summary'],{encoding:'utf8',maxBuffer:32*1024*1024}));assert(summary.ok===true,'Native inspection');
console.log('PASS pinned bytes, 17 examples repeated, native inspection; corpus not_checked');

#!/usr/bin/env python3
"""Verify native reader-world composition from retained original package bytes."""
from pathlib import Path
import argparse,json,subprocess,tempfile,hashlib
ROOT=Path(__file__).resolve().parents[1]
def main():
 p=argparse.ArgumentParser(description=__doc__);p.add_argument('--law',default='law');a=p.parse_args();pin=json.loads((ROOT/'registry/worlds/pin.json').read_text());runtime=json.loads(subprocess.check_output([a.law,'version','--json']));assert runtime['tool']=='0.2.5','Use the pinned published CLI'
 with tempfile.TemporaryDirectory(prefix='arxo-kz-composition-') as tmp:
  t=Path(tmp);c=t/'composition';c.mkdir();(t/'law-workspace.toml').write_text('[workspace]\nid = "kz-constitution-delivery"\nmembers = ["composition"]\n');(c/'law.toml').write_text('[package]\nname = "demo.kz.constitution.reader"\nversion = "0.1.0"\nlanguage = "0.2"\nnamespace = "urn:demo:kz:constitution:reader"\n');(c/'package.law').write_text('language "law.core" version "0.2";\npackage demo.kz.constitution.reader version "0.1.0";\nnamespace "urn:demo:kz:constitution:reader";\n')
  subprocess.run([a.law,'lock',str(c),'--pin'],check=True,stdout=subprocess.DEVNULL)
  (c/'ir.json').write_bytes(subprocess.check_output([a.law,'engine','lower',str(c/'package.law')]))
  for name,row in pin['worlds'].items():
   args=[a.law,'engine','link',str(c/'ir.json'),'--package',str(c),'--merge','concat']
   for item in row['packageInputs']:
    src=ROOT/item['path'];assert 'sha256:'+hashlib.sha256(src.read_bytes()).hexdigest()==item['sha256'];args+=['--concat',str(src)]
   raw=subprocess.check_output(args);assert raw==(ROOT/row['path']).read_bytes(),name+' native composition differs';print('PASS native world',name)
if __name__=='__main__':main()

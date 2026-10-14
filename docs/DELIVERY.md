# Reproduce the consumer delivery

This repository contains selected, pinned working-tree bytes captured from `arxohq/arxo-corpus`. It has fresh Git history. The public file hashes in `source-pin.json` are authoritative; the observed corpus commit is context, not a claim that every byte came from a clean checkout.

The nine original model compilation units retain version 0.1.0, exact semantics law.core/0.2.11 and IR law.core.ir/0.7. They have no imports. Reader worlds are composed with the existing native `law engine link --merge concat`: own snapshots plus explicit source providers. The empty `demo.kz.constitution.reader` assembly root has no rules and is not another legal formalization. Every input and output hash is recorded in `registry/worlds/pin.json`.

The main assembly contains sources and the six current modules. Shared modules also contain old clauses. The historical assembly adds the two historical institutional modules; only the legal date and native edition projection select applicable nodes. No audit-world interpretations are added. The retained amendment package's own disputed readings stay explicit in relevant reader cases.

Ordinary source package manifests use legacy `concat` scenario declarations that the public package-test surface does not execute. The addressed original suites were therefore run through the native test interface with the explicitly pinned reader world; their 138/141 passes and 3 mismatches are reported separately. Do not advertise `law test packages/rights` as full passing consumer acceptance.

```sh
npm install -g @arxo/cli@0.2.5
node tools/check.mjs
```

This checks exact input/export hashes, actual native binary identity, all 17 documented cases twice and native result inspection. It does not run the original 141-case source suites or discover the full corpus.

Optional maintainer reproduction (Python 3.12+):

```sh
python3.12 tools/reproduce-worlds.py
python3.12 tools/canon_publication.py export --source . \
  --config publication.toml --out /tmp/arxo-kazakhstan-artifact
python3.12 tools/canon_publication.py verify --artifact /tmp/arxo-kazakhstan-artifact
```

Use a new export directory. The exporter validates the exact allowlist before writing; its artifact contains neither Git history nor build caches. Reader inputs were captured through native `lower-test`, including their full contexts and selected query steps. New fictional reader `.lawtest` inputs are separate from retained source suites; no scenario parser or legal evaluator was implemented in JavaScript/Python.

Depth uses the existing `boundaries.depth` implementation. Its implementation hashes, own-node inventory, source byte hashes and captured applicability helper are recorded in the report. This is static measurement, not acceptance of the unpublished corpus runtime. The native `formalization/1` diagnostic was not substituted for this measure: its unresolved foreign-anchor fallback can conflate same-number articles across the two editions. Depth reproduction requires the recorded classifier implementation from the authoring source; the consumer kit does not pretend to carry a second classifier.

The public evaluation `sourceAnchors` field is empty on these cases. Model anchors remain available in original CLIR, native unfold and source files. The field limitation and original expectation mismatches are explicit in `reports/verification.json`.

CLI packages come from npm and have their own licenses/notices. No model npm, runtime release, MCP, website or book revision is included. Full corpus: `not_checked`. Overall acceptance: `releaseVerified: false`.

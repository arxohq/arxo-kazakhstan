# Reader examples

Run `law eval examples/<name>` from the repository root after installing the pinned npm CLI. The index records the owner/world, source suite, selected query step, legal date, original expectations and saved answer hash.

Each case directory contains:

- `request.json`: the native replay input with its complete pinned world.
- `case.json`: explicit assertions, origins, context, options and legal date.
- `query.json`: the selected native question.
- `result.json`: the canonical answer recorded by the released CLI.

`scenarios/` holds additional fictional reader inputs. Referendum and government examples demonstrate retained source rules; publication demonstrates the source package's application condition. The historical parliamentary reader copy declares the explicit disputed reading required by the complete assembly. Retained authoring tests under `packages/` and `historical/` are unchanged and have their own reported expectation mismatches.

All calculations, dates, defeat, edition projection and positions are executed by Arxo. Helper tools only check bytes, compose native inputs and compare canonical results.

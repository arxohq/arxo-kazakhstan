# Historical Constitution of Kazakhstan: 1995

This section describes the pinned **consolidated historical edition**, not the original unamended 1995 text. The source model closes its applicability at **1 July 2026**. Historical examples retain the original dates and time-zone offsets.

- [Russian consolidation](../packages/sources/sources/constitution/constitution-1995-ru.txt) and [Kazakh consolidation](../packages/sources/sources/constitution/constitution-1995-kk.txt): 102 headings, including inserted articles and the excluded Article 84 heading.
- [Historical President](president-1995/president-1995.law): `kz.constitution1995.president@0.1.0`.
- [Historical Parliament](parliament-1995/parliament-1995.law): `kz.constitution1995.parliament@0.1.0`.
- [Shared rights](../packages/rights/rights.law), [government](../packages/government/government.law), [courts](../packages/court/court.law) and [amendments](../packages/amendment/amendment.law) also retain historical clauses and anchors.

```sh
law eval examples/historical-president
law eval examples/historical-parliament
law eval examples/edition-before
law eval examples/edition-after
```

Run these commands from the repository root. The full historical reader world includes all nine original compilation units so that shared historical clauses are present. The native engine projects the world to the case's legal date; current-edition nodes are excluded for historical cases. No package or source hash is changed to switch editions.

The parliamentary assembly example explicitly chooses the disputed `ListItselfEntrenchedReading` declared by the amendment module. This is a visible demonstration input, not a certified answer to the historical self-entrenchment dispute.

Fresh structural depth for the historical Russian consolidation: **82 EXECUTABLE / 19 ANCHORED / 1 SOURCE_ONLY**, denominator **102**. This is not full legal completeness. The report also measures the Kazakh text and each own model separately.

[Back to the main 2026 guide](../README.md) · [Depth report](../reports/formalization-depth.json) · [Known source-test mismatches](../reports/source-checks.json).

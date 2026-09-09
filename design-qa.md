# Design QA — Hyundai detail

Дата: 2026-09-05

Источник: [mycar.kz/market/hyundai?from=new_auto_main](https://mycar.kz/market/hyundai?from=new_auto_main)
Реализация: `http://127.0.0.1:4175/market/hyundai?from=new_auto_main`

## Visual truth and implementation evidence

| Surface | Source visual truth | Implementation evidence | Viewport / image size | State |
| --- | --- | --- | --- | --- |
| Desktop top | `docs/design-references/hyundai-market-desktop.png` | `docs/audit/hyundai-local-desktop-top.png` | CSS viewport 1210×756; source capture 1440×900, normalized to 1210×756; density assumed 1 | initial page |
| Mobile top | `docs/design-references/hyundai-market-mobile.png` | `docs/audit/hyundai-local-mobile-top-final.png` | CSS viewport 327×709; source capture 390×844, normalized to 327×709; density assumed 1 | initial page |
| Mobile dealers | `docs/design-references/hyundai-market-dealers-mobile.png` | `docs/audit/hyundai-local-dealers-mobile-final.png` | CSS viewport 327×709; source and local captures normalized to the same size; density assumed 1 | 5 dealers, compact CTA |
| Comparison board | `public/audit-comparison.html` | `docs/audit/hyundai-qa-comparison-final.png` | source/local panels use normalized desktop and mobile inputs | source vs local |

The screenshots were captured from the same browser surface and compared after viewport normalization. The browser reports the mobile panel as 327px wide even when the outer device preset is 390px; this is a panel constraint, not a product breakpoint. Focused-region evidence is available in `docs/audit/hyundai-local-dealers-mobile-final.png` and `docs/audit/hyundai-local-city-modal-mobile.png`.

## Audit steps

1. Header and hero — good. Sticky shell, taz rebrand, breadcrumbs, local hero asset, title and city control are present at desktop and mobile sizes.
2. Model grid — good. Eight local Hyundai model assets preserve the source order, image boxes, 3-column desktop layout and 2-column mobile layout.
3. City modal — good. The selector opens the existing modal, search receives focus, filtering works and a selected city updates the hero label. Evidence: `docs/audit/hyundai-local-city-modal-mobile.png`.
4. Dealer list and CTA — good. Five dealers are shown initially, the list expands to all 33 and collapses again. The annotated mobile CTA is now 151×40px in the effective 327px viewport, with 11px text; it no longer competes with `Самовывоз` or causes horizontal overflow.
5. SEO and footer — good. Brand/city link groups remain in the responsive grid. The credit calculator, contacts, social/app area and safety notice stay removed according to the earlier user annotations.

## Findings and decisions

- P0: none.
- P1: none in the reviewed visual and interaction states.
- P2: none after the final mobile CTA iteration.
- Intentional source differences: the visible brand is `taz`, and the four previously annotated footer/credit blocks are omitted from the local prototype.
- P3 follow-ups: connect real card/dealer routes and backend data; add Escape/focus-trap behavior to the shared modal and drawer before production; replace any remaining legacy assets that are not approved for taz.

## Interaction and runtime checks

- City selector opened and closed; city search and selection were exercised.
- Dealer expansion was exercised from 5 to all 33 records.
- Mobile dealer CTA measured at `151×40px`; page `scrollWidth - clientWidth` was `0`.
- Local-origin console output was filtered and contained no errors during the final pass.
- `npm run build` passed.
- `git diff --check` passed.

## Comparison history

- Initial Hyundai implementation: checked source desktop/mobile composition and local asset loading.
- Hero typography iteration: aligned desktop title to source `Okto 56/60` and re-captured the desktop top state.
- Dealer layout iteration: separated mobile pickup metadata from the CTA to prevent overlap at the effective 327px viewport.
- Final CTA iteration: reduced the mobile availability button to `clamp(148px, 46vw, 170px) × 40px`; re-captured the mobile top and dealers states and re-checked overflow.

## Limits

This is a visual and interaction audit of the observable local prototype, not a full WCAG certification or screen-reader audit. Card links, dealer availability, authentication and backend data remain demo-only.

final result: passed

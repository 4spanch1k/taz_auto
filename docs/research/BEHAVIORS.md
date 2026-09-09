# Mycar /market — behavior bible

## Browser sweep

- Desktop viewport: 1440×900. Mobile viewport: 390×844 with touch emulation. Target document height was about 3863px desktop and about 4595px mobile.
- Header computed state: `position: sticky`, `top: 0`, height `56px`, white background, shadow `0 0 16px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.05)`. It keeps the same visual state after scrolling.
- Main page surface computed color: `rgb(241, 244, 248)`; card surface is white; stronger calculator band is a slightly darker blue-gray.
- Desktop container: max-width 1200px. At viewport widths at or below 1200px, horizontal padding is 16px.

## Responsive behavior

- Desktop (`>=1024px`): header nav visible; brand grid 5 columns; steps 4 columns; popular cars 4 columns; app banner visible; footer link columns spread horizontally.
- Tablet (`768–1023px`): header nav collapses; brand grid remains 2 columns; steps become horizontal overflow cards; popular cars use 3 columns.
- Mobile (`<768px`): header is 56px with hamburger/logo/profile; brand cards are 2 columns, 128px high, 8px gaps; steps are compact horizontal cards; popular cars are 3 columns with 1px gaps; calculator becomes one compact white card; app banner hidden; footer stacks into compact columns.

## Click states

- City button opens a modal with a dimmed backdrop, dialog title `Выберите город`, close icon, search field, `Весь Казахстан` chip, `Алматы`, `Астана`, `Шымкент` quick buttons and the other cities as rows.
- Clicking modal close or backdrop dismisses it. Search filters city rows. Selecting a city closes the modal and updates the button label locally in the clone.
- Mobile hamburger opens a left-side navigation panel containing the main links, service links, support WhatsApp CTA, theme buttons and language buttons. Close button returns to page.
- Calculator term buttons select exactly one term. The source defaults to 84 months and shows `208 778 ₸/мес` for 11,000,000 car price / 2,200,000 down payment. The clone keeps the same default and updates the output for other terms.
- Credit calculator fields accept numeric values, format with spaces and update the monthly payment. `Узнать решение` is demo-only and does not submit real data.

## Hover/focus states

- Brand cards transition from white to a light gray surface over 200ms.
- Header nav uses a black underline for the active page and color change on hover.
- Links use a subtle color/underline transition. Inputs show a visible focus ring.
- Car cards have rounded 16px corners, clipped images and a bottom gradient that keeps white/orange text legible.

## Asset/font findings

- Body family: `InterDisplay`; heading family: `Okto`; some inter headings use `Inter`.
- Important source typography: body 12/16, body 14/20, subheading 20/24, large heading 36/40, section heading 24/32.
- Real brand logo/banner, car, credit illustration and QR assets are downloaded locally by `scripts/download-assets.mjs`.

## Scope boundary

The implementation reproduces the visible UI and interactions with local demo state. Real authentication, credit submission, location APIs, analytics and backend routing remain intentionally out of scope.

## Hyundai detail route behavior

- `/market/hyundai?from=new_auto_main` uses a 380px desktop / 236px mobile hero and keeps the header sticky at 56px.
- City selector opens the same search modal. Selecting `Алматы`, `Астана`, `Шымкент` or another city closes the modal and changes the hero label.
- Dealer list renders 5 cards initially. `Смотреть все` renders all 33 captured dealers; the same control collapses back to 5.
- Mobile dealer CTA was reduced after annotation to `clamp(148px, 46vw, 170px) × 40px`, with 11px text. At the captured 327px effective viewport it renders at 151×40px and stays clear of `Самовывоз`.
- Source evidence included desktop/mobile top, model, dealer, footer, city-modal and expanded-dealer states. Local copies are stored in `docs/design-references/` and `docs/audit/`.

# Mycar /market — page topology

Source: https://mycar.kz/market, inspected 2026-09-05 through Chrome DevTools MCP.

## Global shell

- `body`: white header followed by a pale blue-gray page surface; max content width 1200px.
- Header is 56px tall, sticky on desktop, with a thin bottom border and soft shadow. Desktop content is horizontal; mobile collapses to hamburger, logo, profile icon.
- Main content is a single vertical flow. There are horizontal separators between the brand, purchase-flow and popular-car blocks.
- Footer is a separate pale surface with link columns, social links, app links, safety notice, legal line and phone/email.

## Sections in visual order

1. Breadcrumbs: `Главная / Новые авто`. Static navigation.
2. Brand picker: heading, `Весь Казахстан` button, 13 brand cards plus disabled “Скоро будут новые бренды” card. Cards link to brand URLs. Desktop: 5 columns; tablet/mobile: 2 columns.
3. City modal: click-driven overlay opened by the city button. Desktop is a centered 584px dialog; mobile uses a full-height/bottom-sheet style. Includes search, all-country chip, three large-city buttons and a long city list.
4. Purchase steps: four white cards, 4 columns on desktop and a horizontally scrollable row below desktop breakpoint.
5. Popular models: 12 image cards. Desktop: 4 columns; tablet: 3; mobile: 3 compact columns. Cards link to model URLs and use the real vehicle images with a dark bottom gradient.
6. Credit calculator: pale darker band. Desktop has benefit cards on the left and calculator on the right; mobile shows only the compact calculator card. Inputs and term buttons update the monthly result.
7. App promotion: desktop-only black rounded banner with app text and store buttons. Hidden on mobile/tablet in the source layout.
8. SEO link grids: brand links and city links. Desktop uses 6 columns; mobile uses 3 columns and a `Показать еще` affordance.
9. Footer: four link groups plus social, WhatsApp support, app badges, warning and copyright strip.

## Interaction model

- Static content: breadcrumbs, brands, purchase steps, popular cars, SEO grids and footer.
- Click-driven: city selector/modal, mobile sidebar, calculator term buttons, calculator input, header links and car/brand links.
- Hover-driven: header nav underline, brand card surface tint, car card subtle lift/scale, text links underline/color.
- Scroll-driven: sticky desktop header; horizontal card rows on narrower layouts. No observed scroll-snap or scroll-triggered tab switching.
- Time-driven: no content carousel observed.

## taz /market/hyundai detail route

Source: https://mycar.kz/market/hyundai?from=new_auto_main, inspected 2026-09-05 through the in-app browser.

1. Sticky header: shared taz shell; mobile adds favorites and profile controls.
2. Hyundai hero: local 3600×1080 banner, 380px desktop / 236px mobile, breadcrumbs, title and city button.
3. Hyundai models: eight transparent vehicle cards in a 3-column desktop / 2-column mobile grid.
4. Dealer centers: five visible Hyundai centers, expandable to the captured list of 33 centers.
5. SEO links: new-auto intro followed by brand and city link grids.
6. Footer: compact taz variant with the four user-removed blocks omitted.

Detail interactions are click-driven for city selection, dealer expansion and mobile menu; model/dealer/SEO links are demo anchors until routing is connected. The source page showed no carousel or scroll-snap behavior.

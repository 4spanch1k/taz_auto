# Hyundai brand detail page spec

Source: https://mycar.kz/market/hyundai?from=new_auto_main
Local route: `/market/hyundai?from=new_auto_main`

## Structure

- Sticky 56px header with desktop navigation and mobile hamburger, favorite and profile controls.
- Hero banner: 380px desktop / 236px mobile, local Hyundai close-up photo with a 50% black overlay.
- Breadcrumbs, `Hyundai` title and city selector over the hero.
- Model grid: 8 transparent vehicle assets, 3 columns desktop and 2 columns mobile.
- Dealer section: first 5 of 33 centers by default, expandable to all 33.
- SEO area: new-auto intro, brand links and city links in a 6-column desktop / 3-column mobile grid.
- Compact taz footer. Contacts, social/app block and safety notice remain removed per user annotation.

## Exact visual rules

- Base surface: `#FFFFFF`; page/footer surface: `#F1F4F8`.
- Hero: `background-size: cover`, centered source image, `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))`.
- Hero title: Okto 56/60 px desktop, 36/40 px mobile.
- Section title: Okto 28/32 px.
- Model image box: 200px high, 16px radius; model name: Okto 36/40 px.
- Desktop model grid gap: 40px horizontal / 64px vertical.
- Dealer CTA: black pill, 199×48 px desktop; compact mobile CTA is 151×40 px in the 327px effective browser viewport.
- Dealer rows use a 40px Hyundai logo, title/address copy, pickup label and CTA.

## Interaction model

- City selector opens the existing search modal; selecting a city updates the hero label.
- Dealer `Смотреть все` expands from 5 to all 33 records and can collapse again.
- Model, brand, city and dealer links are local demo anchors until real routing is connected.
- Header menu uses the shared mobile drawer.

## Assets

- `public/assets/hyundai-detail/hero.jpg`
- `public/assets/hyundai-detail/models/*.png`
- `public/assets/hyundai-detail/dealer-logo.png`

All detail-page image assets were downloaded locally from the captured source URLs; no source image is hotlinked by the prototype.

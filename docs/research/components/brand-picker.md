# Brand picker component spec

- Layout: section inside 1200px container. Heading row with 36px/40px desktop title, compact 20px/24px mobile title and right-aligned blue city pill.
- Grid: desktop 5 equal columns, 8px gap, cards 196px tall; below desktop two columns, mobile cards 128px tall.
- Card: white background, 0.5px rgba(0,0,0,.15) border, 16px radius, 16px desktop padding / 12px mobile padding, overflow hidden, relative positioning.
- Content: real brand logo top-left, brand name beneath; real vehicle banner image absolute bottom-right. Disabled card has gray-blue background, gray car icon and muted title.
- Behavior: anchors navigate to the corresponding local placeholder path; hover changes surface to #f4f4f4 over 200ms. City pill opens the modal described in `BEHAVIORS.md`.
- Assets: `public/assets/brands/*-logo.webp` and `public/assets/brands/*-banner.webp`.

# Popular cars component spec

- Layout: heading `Популярные модели новых авто`, then 12 cards in a 4×3 desktop grid, 3-column tablet/mobile grid.
- Card: 294×200px desktop, rounded 16px, overflow hidden. Image fills card with `object-fit: cover`; dark bottom gradient; content anchored bottom-left with 12px/16px text, 20px/24px price and orange monthly line.
- Data: exact visible source models and prices are preserved in `src/main.jsx`.
- Behavior: cards are links; on hover image scales subtly and card rises by 1px. Mobile cards remain compact and readable.
- Assets: `public/assets/cars/*.webp`.

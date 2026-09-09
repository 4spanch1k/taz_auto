# Credit calculator component spec

- Background band: full viewport width, darker blue-gray, desktop 80px vertical padding and mobile 40px.
- Desktop layout: benefit stack around 400px wide plus calculator card; mobile only calculator card is shown.
- Calculator: white rounded 16px card, compact labels in uppercase, two input fields with pale gray fill, 7 term buttons, large monthly value, muted disclaimer and blue CTA.
- Default: price 11,000,000; down payment 2,200,000; term 84; monthly result `208 778 ₸/мес`.
- Interaction: input normalization and term selection are local React state; monthly payment uses a fixed demo APR to retain the exact default result. CTA shows a lightweight confirmation state only.

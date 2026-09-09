/** TAZ tailwind theme extension — маппит semantic-токены из tokens.css. */

module.exports = {
  theme: {
    extend: {
      colors: {
        page: 'var(--bg-page)',
        surface: 'var(--bg-surface)',
        chip: 'var(--bg-chip)',
        'app-banner': 'var(--bg-app-banner)',
        'control-muted': 'var(--bg-control-muted)',

        body: 'var(--text-body)',
        heading: 'var(--text-heading)',
        'heading-card': 'var(--text-heading-card)',
        muted: 'var(--text-muted)',
        link: 'var(--text-link)',

        primary: 'var(--action-primary)',
        accent: 'var(--action-accent)',

        divider: 'var(--border-divider)',
        control: 'var(--border-control)',
      },
      borderRadius: {
        control: 'var(--radius-control)',
        'control-lg': 'var(--radius-control-lg)',
        card: 'var(--radius-card)',
      },
      spacing: {
        100: 'var(--space-100)',
        200: 'var(--space-200)',
        350: 'var(--space-350)',
        500: 'var(--space-500)',
        700: 'var(--space-700)',
      },
      maxWidth: {
        container: 'var(--container-max)',
      },
      height: {
        header: 'var(--header-height)',
      },
      boxShadow: {
        header: 'var(--shadow-header)',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
    },
  },
};

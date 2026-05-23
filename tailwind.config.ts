import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary':    'var(--color-bg-primary)',
        'bg-surface':    'var(--color-bg-surface)',
        'border-subtle': 'var(--color-border-subtle)',
        'accent-blue':   'var(--color-accent-blue)',
        'accent-silver': 'var(--color-accent-silver)',
        'accent-gold':   'var(--color-accent-gold)',
        'text-primary':  'var(--color-text-primary)',
        'text-secondary':'var(--color-text-secondary)',
      },
      fontFamily: {
        heading: ['var(--font-oswald)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at center, #0F1624 0%, #080C14 60%, #000000 100%)',
      },
    },
  },
  plugins: [],
}

export default config

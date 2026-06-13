import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        aubergine: '#741F7C',
        plumInk:   '#2A1430',
        mist:      '#F6F2F8',
        teal:      '#119DA4',
        signal:    '#1BA672',
        slate:     '#6B6475',
        line:      '#E7DEEC',
      },
      fontFamily: {
        display: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
        body:    ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        mono:    ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.02em',
      },
      borderRadius: {
        brand: '18px',
      },
    },
  },
  plugins: [],
}

export default config

export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  // Hover styles only apply on devices that can truly hover (no sticky hover on touch)
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#0A0A0B', raised: '#0E0E11' },
        surface: { DEFAULT: '#16161A', 2: '#1C1C21' },
        line: '#27272A',
        ink: '#F4F4F5',
        muted: '#A1A1AA',
        accent: { DEFAULT: '#6366F1', soft: '#A5B4FC', violet: '#8B5CF6', deep: '#4F46E5' },
        signal: '#22D3EE',
        positive: '#34D399',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

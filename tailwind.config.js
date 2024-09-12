/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        tertiary: 'var(--color-tertiary)',
        background: 'var(--color-background)',
        shadow: 'var(--color-shadow)',
    },
    fontFamily: {
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
      mono: 'var(--font-mono)',
  },
    fontSize: {
      base: 'var(--font-size-base)',
      lg: 'var(--font-size-lg)',
      sm: 'var(--font-size-sm)',
      h1: 'var(--font-size-h1)', 
      h2: 'var(--font-size-h2)', 
      h3: 'var(--font-size-h3)', 
      h4: 'var(--font-size-h4)', 
      h5: 'var(--font-size-h5)', 
      h6: 'var(--font-size-h6)',
  },
    borderRadius: {
      sm: 'var(--border-radius)',
    },
  plugins: [],
} 

}}


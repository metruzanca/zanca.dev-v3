module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        accent: '#f7e13a',
        secondary: '#111019',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};
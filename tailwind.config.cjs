module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        accent: '#f7e13a',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};
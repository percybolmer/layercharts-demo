const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,svelte,js,ts}', './node_modules/svelte-ux/**/*.{svelte,js}', './node_modules/layerchart/dist/components/*.{svelte,js}'],
  theme: {
    extend: {
      colors: {
        accent: colors.blue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('svelte-ux/plugins/tailwind.cjs')],
};

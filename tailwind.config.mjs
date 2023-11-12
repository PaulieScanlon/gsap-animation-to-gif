/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        MijaBold: ['MijaBold', 'sans-serif'],
        ElenaRegular: ['ElenaRegular', 'sans-serif'],
        ElenaBold: ['ElenaBold', 'sans-serif'],
        ElenaItalic: ['ElenaItalic', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*': {
              fontFamily: 'ElenaRegular',
            },
            'h1, h2, h3, h4, h5, h6, a, button': {
              fontFamily: 'MijaBold',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

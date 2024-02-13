/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#F2EDE7',
        'secondary-white': '#331E10',
        'fire-engine-red': '#AF253C',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'extra-lg': '0 20px 30px -1px rgba(0, 0, 0, 0.9)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont'],
        serif: ['Georgia', 'Cambria'],
        //       'mono': ['SFMono-Regular', 'Menlo',],
        title: ['Japanese_3017', 'Arial'],
        title2:['ProtestRevolution','Arial'],
        body: ['Josefin_Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  variants: {
    extend: {
      flexDirection: ['responsive', 'portrait'],
      position: ['responsive', 'portrait'],
    },
  },

};


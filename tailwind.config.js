module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica','Arial','sans-serif']
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.438rem',
      },
      colors: {
        'our-green':{
          DEFAULT: '#76B72A'
        },
        'our-blue': {
          light:'#c1c8e4',
          DEFAULT: '#184B94',
        },
        'our-gray': {
          DEFAULT: '#F0F3FD',
        },
        'our-orange': {
          DEFAULT: '#F29100',
        },
        'badge-red':{
          DEFAULT: '#F52F6B',
        }
        // 'nav-hover-blue': {
        //   DEFAULT: '#286090',
        // },
        // 'nav-menu-active':{
        //   DEFAULT: '#1d4568',
        // },
        // 'new': {
        //   DEFAULT: '#D9EDF7',
        // },
      }
    },
  },
  corePlugins: {
    preflight: true,
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};

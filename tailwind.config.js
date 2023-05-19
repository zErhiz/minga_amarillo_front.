/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
  './src/**/*.{js,jsx,ts,tsx}' //esto también es una forma de englobar subdirectorios
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
  extend: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    colors:{
      primary:"#222"
    },
    backgroundImage :{
      'hero': "url('../public/img/Images + Rectangle.png')",
      'bgnaranja': "url('../public/img/rectangulonaranja.png')",
      'bgnewrole': "url('../public/img/newroleImage.png')",
      'bgform':"url('../public/img/BGFORM.png')",
      'bgform2':"url('../public/img/BGFORM2.PNG')",
      'bgmanga':"url('../public/img/bgmanga.png')",
      'bgfavourites':"url('../public/img/favourites.png')",

      'bgauthors': "url('../public/img/authors.png')"

    },
    width: {
      '128': '50vw',
    },
    height: {
      '128': '50vh',
    },    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      inset: {
        '3px': '3px',
      },
      colors: {
        'bgmobile': '#EBEBEB',
      },
    }
  }
  
  },
  variants: {},
  plugins: []
 }
 
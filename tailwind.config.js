/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
  './src/**/*.{js,jsx,ts,tsx}' //esto también es una forma de englobar subdirectorios
  ],
  theme: {
  extend: {
    colors:{
      primary:"#222"
    },
    backgroundImage :{
      'hero': "url('../public/img/Images + Rectangle.png')",
      
    },

    height: {
      '128': '50vh',
    },    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    
  }
  },
  variants: {},
  plugins: []
 }
 
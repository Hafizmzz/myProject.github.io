/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontfamily:{
        poppins:["Poppins"]
    },
      colors: {
        'bluedk': '#213555',
        'bluelght': '#4F709C',
      },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
}

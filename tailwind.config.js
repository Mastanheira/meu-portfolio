/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botao: '#FCCDCC',
        fundomenu: '#FDFDE7',
        titulo: '#CCE8FC',
        fundo: '#FCFCE6',
        textos: 'B09897'
      },
      backgroundImage: {
        'mola': "url('https://api.iconify.design/iconoir/spiral.svg')",
        'cupcake': "url('https://i.ibb.co/pvyWtmQ/cupcake-medium.png')",
        'bolo': "url('https://i.ibb.co/m69pxkY/bolo-medium.png')"
      }
    },
  },
  plugins: [],
}

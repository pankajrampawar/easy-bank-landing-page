/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DB: 'hsl(233, 26%, 24%)',
        LG: 'hsl(136, 65%, 51%)',
        BC: 'hsl(192, 70%, 51%)',
        GB: 'hsl(233, 8%, 62%)',
        LGB: 'hsl(220, 16%, 96%)',
        VLG: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}


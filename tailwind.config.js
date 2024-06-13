/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    ontFamily: {
      outfil: ['"Outfit"', 'sans-serif'],
    },
    extend: {
      fontSize: {
        'm': '0.981rem',
      }
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'White': 'hsl(0, 0%, 100%)',
      'Rose-White': 'hsl(330, 100%, 98%)',
      'Eggshell': 'hsl(30, 54%, 90%)',
      'Light-Grey': 'hsl(30, 18%, 87%)',
      'Wenge-Brown': 'hsl(30, 10%, 34%)',
      'Dark-Charcoal': 'hsl(24, 5%, 18%)',
      'Nutmeg': 'hsl(14, 45%, 36%)',
      'Dark-Raspberry': 'hsl(332, 51%, 32%)',
    },
  },
  plugins: [],
}


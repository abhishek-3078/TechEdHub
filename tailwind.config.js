/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    fontFamily: {
      heading:['Poppins','serif'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'primary':"#14235D",
        'primary1':"#14235D",
         'secondary':'#136EFD'
        
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}


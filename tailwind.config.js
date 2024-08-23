/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    // Other configurations...
  },

  content: ["*.html",
    
  ],
  theme: {
    extend: {
      backgroundAttachment: {
        fixed: 'fixed',
      },
    },
  },
  plugins: [],
}
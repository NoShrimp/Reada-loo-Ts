module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'sans': 'Helvetica, Arial, sans-serif',
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
              "primary": "#65c3c8",
              "secondary": "#ef9fbc",
              "accent": "#eeaf3a",
              "neutral": "#291334",    
              "base-100": "#faf7f5",     
              "info": "#00b5ff",      
              "success": "#ffffff",      
              "warning": "#ffbe00",   
              "error": "#ff5861",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


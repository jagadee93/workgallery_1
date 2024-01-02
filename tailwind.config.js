/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '5xl': ['64px', '78px'],
      '6xl': ['72px', '88px'],
      '7xl': ['80px', '98px'],
      '8xl': ['96px', '106px'],
    },
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#E5E7EB',
        black: '#131313',
        accent: '#026BF6',
        'coral-red': '#FF6452',
        'slate-gray': '#6D6D6D',
        'pale-blue': '#F5F6FF',
        'white-400': 'rgba(255, 255, 255, 0.80)',
        btnbackground: '#026BF6',
        btnborder: '#4285F4',
        fontblue: '#1A7DFF',
        subtitle: '#D0D0D0',
        pf_subtitle: 'rgba(255, 255, 255, 0.60)',
        footer_font: '#9CA3AF',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
        workAI: "url('assets/images/WorkAIBG.svg')",
      },
      screens: {
        wide: '1440px',
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'diagonal-gradient': 'linear-gradient(135deg, #000000, #001f3f)', // Black to midnight blue diagonal gradient
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        
      },
      gridTemplateColumns: {
        '70/30': '70% 30%', // Corrected the column ratio
      },
      animation: {
        pulseLight: 'pulseLight 2s infinite',
    },
    keyframes: {
      pulseLight: {
        '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 20px rgba(0, 255, 0, 0.8)' },
        '50%': { transform: 'scale(1.2)', boxShadow: '0 0 40px rgba(0, 255, 0, 1)' },
      },
    },
    }

  },
  plugins: [],
};
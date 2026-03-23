/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F2E8',
        parchment: '#FBF8F1',
        olive: '#55624A',
        forest: '#293126',
        wheat: '#C5A46D',
        taupe: '#B89C7B',
        bark: '#6C5741',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(41, 49, 38, 0.10)',
        card: '0 12px 36px rgba(58, 48, 35, 0.12)',
        glass: '0 18px 50px rgba(34, 39, 31, 0.18)',
      },
      backgroundImage: {
        grain: 'radial-gradient(circle at top, rgba(197, 164, 109, 0.18), transparent 42%), linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0.8))',
      },
      keyframes: {
        floatIn: {
          '0%': { opacity: '0', transform: 'translateY(26px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 10px 30px rgba(197, 164, 109, 0.15)' },
          '50%': { boxShadow: '0 14px 40px rgba(197, 164, 109, 0.28)' },
        },
      },
      animation: {
        floatIn: 'floatIn 700ms ease-out forwards',
        fadeUp: 'fadeUp 700ms ease-out forwards',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

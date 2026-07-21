/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#10233F',
          dark: '#0A172B',
          light: '#1A335B',
        },
        cyan: {
          iris: '#21A7C7',
          deep: '#14809A',
          bright: '#38D4F7',
        },
        pearl: {
          DEFAULT: '#F7FBFC',
          soft: '#EEF6F9',
        },
        violet: {
          prism: '#7166D9',
          deep: '#4E43B3',
        },
        mist: {
          aqua: '#DFF5F7',
          soft: '#E8F7F9',
        },
        silver: {
          soft: '#D9E2E8',
          medium: '#9AAEC1',
        },
        gold: {
          lens: '#D7B66F',
          bright: '#F5D78E',
        },
        coral: {
          light: '#F08278',
          accent: '#E65D50',
        },
        ink: {
          deep: '#17202D',
          dark: '#0E141E',
        }
      },
      fontFamily: {
        heading: ['Sora', 'Space Grotesk', 'sans-serif'],
        body: ['Inter', 'Manrope', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'prism-gradient': 'linear-gradient(135deg, #10233F 0%, #21A7C7 100%)',
        'violet-cyan': 'linear-gradient(135deg, #7166D9 0%, #21A7C7 100%)',
        'pearl-mist': 'linear-gradient(180deg, #F7FBFC 0%, #DFF5F7 100%)',
        'gold-glow': 'radial-gradient(circle, rgba(215, 182, 111, 0.25) 0%, rgba(16, 35, 63, 0) 70%)',
        'iris-radial': 'radial-gradient(circle at center, rgba(33, 167, 199, 0.15) 0%, rgba(16, 35, 63, 0.95) 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'refraction-sweep': 'refraction 6s ease-in-out infinite',
        'iris-rotate': 'irisRotate 20s linear infinite',
      },
      keyframes: {
        refraction: {
          '0%, 100%': { transform: 'translateX(-100%) rotate(45deg)', opacity: '0.2' },
          '50%': { transform: 'translateX(200%) rotate(45deg)', opacity: '0.6' },
        },
        irisRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}

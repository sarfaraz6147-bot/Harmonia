import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — deep cosmic dark
        base: {
          950: '#05050d',
          900: '#080812',
          800: '#0d0d1a',
          700: '#121220',
          600: '#181828',
          500: '#1e1e32',
        },
        surface: {
          DEFAULT: '#13131f',
          raised: '#1a1a2e',
          overlay: '#202038',
        },
        // Soft purple accent
        violet: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        // Accent rose
        rose: {
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
        },
        // Text scale
        ink: {
          100: '#f0efff',
          200: '#d4d2f0',
          300: '#9896c0',
          400: '#6b6990',
          500: '#3f3d5c',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-violet': 'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)',
        'glow-rose': 'radial-gradient(ellipse at center, rgba(244,63,94,0.12) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(139,92,246,0.2)',
        'glow-md': '0 0 40px rgba(139,92,246,0.25)',
        'glow-lg': '0 0 80px rgba(139,92,246,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'player': '0 -8px 40px rgba(0,0,0,0.5)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'bounce-soft': 'bounceSoft 0.6s ease-out',
        'equalizer-1': 'equalizer 0.8s ease-in-out infinite alternate',
        'equalizer-2': 'equalizer 1.1s ease-in-out infinite alternate 0.2s',
        'equalizer-3': 'equalizer 0.9s ease-in-out infinite alternate 0.4s',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        equalizer: {
          '0%': { transform: 'scaleY(0.3)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};

export default config;

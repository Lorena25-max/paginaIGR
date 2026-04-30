module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#000000", // black - Sophisticated foundation, spiritual depth
          dark: "#000000", // black
          light: "#1a1a1a", // near-black
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#c38914", // gold-600 - Warm elevation, sacred moments
          light: "#d4a134", // gold-500
          dark: "#a67510", // gold-700
        },
        // Accent Colors
        accent: {
          DEFAULT: "#f4d03f", // yellow-400 - Gentle highlights, hope touches
          light: "#f6db6f", // yellow-300
          dark: "#e8c020", // yellow-500
        },
        // Background Colors
        background: {
          DEFAULT: "#1a1a1a", // gray-900 - Subtle content separation
          light: "#2d2d2d", // gray-800
          dark: "#0d0d0d", // near-black
        },
        // Surface Colors
        surface: {
          DEFAULT: "#2d2d2d", // gray-800 - Card depth, content grouping
          light: "#3d3d3d", // gray-700
          dark: "#1f1f1f", // gray-850
        },
        // Text Colors
        text: {
          primary: "#ffffff", // white - Clear readability, pure communication
          secondary: "#cccccc", // gray-300 - Hierarchy support, gentle guidance
          tertiary: "#999999", // gray-400
          disabled: "#666666", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#27ae60", // green-600 - Positive confirmation, growth celebration
          light: "#2ecc71", // green-500
          dark: "#229954", // green-700
        },
        warning: {
          DEFAULT: "#f39c12", // orange-500 - Gentle urgency, caring attention
          light: "#f5b041", // orange-400
          dark: "#d68910", // orange-600
        },
        error: {
          DEFAULT: "#e74c3c", // red-500 - Helpful correction, supportive guidance
          light: "#ec7063", // red-400
          dark: "#c0392b", // red-600
        },
        // Border Colors
        border: {
          subtle: "rgba(255, 255, 255, 0.1)", // Hairline borders
          accent: "#c38914", // gold-600 - Featured content
          focus: "#f4d03f", // yellow-400 - Active states
        },
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        cta: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.875rem' }],
        'xl': ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '4rem' }],
        '7xl': ['4.5rem', { lineHeight: '4.75rem' }],
      },
      boxShadow: {
        'subtle': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.4)',
        'strong': '0 12px 40px rgba(0, 0, 0, 0.5)',
        'gold': '0 4px 20px rgba(195, 137, 20, 0.2)',
      },
      transitionDuration: {
        'fast': '300ms',
        'medium': '600ms',
        'slow': '900ms',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 600ms ease-out',
        'slide-up': 'slideUp 600ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #c38914 0%, #f4d03f 100%)',
      },
    },
  },
  plugins: [],
}
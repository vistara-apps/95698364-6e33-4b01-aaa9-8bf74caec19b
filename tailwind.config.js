/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(210 40% 96%)',
        accent: 'hsl(208 70% 50%)',
        bg: 'hsl(210 40% 98%)',
        surface: 'hsl(210 40% 100%)',
        textPrimary: 'hsl(210 40% 15%)',
        textSecondary: 'hsl(210 40% 45%)',
        dark: {
          bg: 'hsl(220 30% 8%)',
          surface: 'hsl(220 30% 12%)',
          card: 'hsl(220 30% 15%)',
          border: 'hsl(220 30% 20%)',
        }
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
      boxShadow: {
        card: '0 4px 12px hsla(210, 40%, 15%, 0.08)',
        'card-dark': '0 4px 12px hsla(220, 30%, 0%, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563EB',
          'blue-hover': '#1D4ED8',
          'blue-light': '#EFF6FF',
          orange: '#F97316',
          'orange-light': '#FFF7ED',
        },
        reelax: {
          bg: '#F0F2F5',
          dark: '#1A1A2E',
          navbar: '#111827',
          white: '#FFFFFF',
          border: '#E2E8F0',
          'border-dark': '#CBD5E1',
          'text-primary': '#111827',
          'text-secondary': '#6B7280',
          'text-muted': '#9CA3AF',
          'input-bg': '#FFFFFF',
          'input-border': '#D1D5DB',
          'input-placeholder': '#9CA3AF',
          'card-bg': '#FFFFFF',
          'sidebar-divider': '#E5E7EB',
          'coupon-selected': '#EFF6FF',
          'coupon-border': '#2563EB',
          success: '#10B981',
          'success-light': '#ECFDF5',
          error: '#EF4444',
          total: '#2563EB',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.1)',
        'navbar': '0 1px 3px rgba(0,0,0,0.3)',
        'input-focus': '0 0 0 3px rgba(37,99,235,0.1)',
      },
      fontSize: {
        'xxs': ['10px', '14px'],
      }
    },
  },
  plugins: [],
}

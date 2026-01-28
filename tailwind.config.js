/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'china-red': '#DC2626',
        'china-gold': '#F59E0B',
        'china-dark': '#1F2937',
        'beijing': '#22C55E',
        'xian': '#F97316',
        'zhangjiajie': '#3B82F6',
        'shanghai': '#EAB308',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

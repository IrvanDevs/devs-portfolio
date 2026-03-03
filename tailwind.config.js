/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#1C0770',
  			secondary: '#121212',
  			tertiary: '#F5F5F5',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
		},
		keyframes: {
			'blink-cursor': {
			'0%, 50%, 100%': { opacity: 1 },
			'25%, 75%': { opacity: 0 },
			}
		},
		animation: {
			'blink-cursor': 'blink-cursor 1s infinite'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
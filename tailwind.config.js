/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{html,js}',
		'./node_modules/tw-elements/dist/js/**/*.js'
	],
	theme: {
		extend: {
			container: {
				center: true,

				padding: {
					DEFAULT: '1rem',
					// sm: '2rem',
					// lg: '4rem'
					// xl: '5rem',
					'2xl': '6rem'
				}
			},
			animation: {
				fadeIn: 'fadeIn 1s 1',
				fadeOut: 'fadeOut 1s 1'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				},
				fadeOut: {
					'0%': { opacity: 1 },
					'100%': { opacity: 0 }
				}
			},
			colors: {
				'great-blue': {
					DEFAULT: '#2A669F',
					50: '#E4F7F8',
					100: '#CCEEF2',
					200: '#9CD7E5',
					300: '#6CB9D8',
					400: '#3B94CB',
					500: '#2A669F',
					600: '#234B83',
					700: '#1B3366',
					800: '#14204A',
					900: '#0C102E'
				}
			}
		}
	},
	plugins: [require('tw-elements/dist/plugin')]
};

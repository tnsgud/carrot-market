import type { Config } from 'tailwindcss'
import Forms from '@tailwindcss/forms'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {},
	plugins: [Forms],
}
export default config

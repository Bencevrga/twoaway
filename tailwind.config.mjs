/** @type {import('tailwindcss').Config} */
export default {
content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#0ea5e9', // TwoAway kék (testreszabható)
dark: '#0369a1',
light: '#7dd3fc'
}
}
}
},
plugins: []
};
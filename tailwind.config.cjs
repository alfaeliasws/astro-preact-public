/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans:['Source Sans Pro','ui-sans-serif','system-ui'],
				mono:['Source Code Pro','ui-monospace']
			},
			fontSize: {
				big:"3rem"
			},
			letterSpacing: {
				semi:"0.12rem",
				kinda:"0.15rem",
				kindof:"0.2rem",
				quite:"0.25rem",
				ql:"0.35rem",
				large:"0.5rem",
				super:"1 rem"
			},
			utilities:{
			},
			colors:{
				main:{
					"light-1":"#4d4c4c",
					"light":"#363535",
					"50":"#201F1F",
					"100":"#181717",
					"200":"#1B1919",
					"300":"#121111"
				}
			},
			brightness:{
				115:'1.15'
			},
			flexGrow:{
				'2':2
			}
		},
	},
	plugins: [
		plugin(function({addUtilities}){
		const utilities = {
			".shadow-skill":{
			"box-shadow": "0px 10px 30px rgba(0, 0, 0, 1)"
			},
			".shadow-new":{
			"box-shadow": "0px 10px 20px rgba(0, 0, 0, 1)"
			},
			".shadow-newest":{
			"box-shadow": "0px 5px 10px rgba(0, 0, 0, 1)"
			},
			".bg-hero":{
				"background-image":"url(/Hero.png)",
				"background-size":"cover",
				"background-position":"bottom",
				"background-repeat":"no-repeat"
			},
		}
		addUtilities(utilities);
		}),
	],
	variants: {
		scrollbar: ['rounded']
	}
}
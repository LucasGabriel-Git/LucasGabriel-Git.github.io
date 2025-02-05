module.exports = {
	content: ["./*.html"], // Garante que o Tailwind analise seus arquivos HTML
	theme: {
		extend: {
			fontFamily: {
				archivo: ["Archivo", "sans-serif"],
			},
			colors: {
				"text-color": "#1A202C",
			},
			backgroundColor: {
				"bg-input": "#F7FAFC",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
		require("tailwindcss-children"),
	],
};

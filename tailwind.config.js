/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/components/**/*.{js,vue,ts}",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./app/plugins/**/*.{js,ts}",
        "./app/app.vue",
        "./app/error.vue",
    ],
    theme: {
        extend: {
            colors: {
                'aria-gold': '#D4AF37', // Classic Gold
                'aria-dark-gold': '#AA8C2C',
                'aria-void': '#0F172A', // Deepest Blue/Black
                'aria-midnight': '#1E293B', // Dark Blue
                'aria-obsidian': '#334155', // Slate
                'aria-mystic': '#6366F1', // Indigo/Purple accent
                'aria-glow': '#818CF8', // Lighter glow
                'aria-parchment': '#F5E6D3', // Keep for legacy/contrast
                'aria-brown': '#4A3B2A',
                'aria-blue': '#1B3B5F', // Deep muted blue
                'aria-sea': '#2C7A7B', // Teal/Sea green
            },
            fontFamily: {
                'cinzel': ['Cinzel', 'serif'],
                'body': ['Lato', 'sans-serif'],
            },
            backgroundImage: {
                'parchment-texture': "url('/assets/images/parchment-bg.png')", // Placeholder if we had one, or use color
            }
        },
    },
    plugins: [],
}

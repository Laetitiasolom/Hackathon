/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./_includes/**/*.{html,md}",
        "./_layouts/**/*.{html,md}",
        "./_pages/**/*.{html,md}",
        "./_posts/**/*.{html,md}",
        "./*.{html,md}"
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        extend: {
            colors: {
                nordic: {
                    text: '#2C3E50', // Dark Blue/Grey for text
                    accent: '#64748B', // Muted Blue/Grey for accents/details
                    pop: '#94A3B8', // Lighter Muted Blue/Grey
                    bg: '#F8FAFC', // Base background (will be covered by image)
                    card: '#FFFFFF',
                    header: '#14532D', // Dark Green (emerald-900 like) for header
                }
            },
            fontFamily: {
                sans: ['"DM Sans"', 'sans-serif'],
                heading: ['"Outfit"', 'sans-serif'],
                nordic: ['"Space Grotesk"', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
                youth: ['"Oswald"', '"Barlow Condensed"', 'sans-serif'], // Approximate 'Youth' font
            },
            borderRadius: {
                'pill': '9999px',
                'subtle': '0.75rem', // rounded-xl check
            },
            backgroundImage: {
                'cloudy-sky': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\"), linear-gradient(to bottom right, #f8fafc, #e2e8f0)",
                'cloudy-sky-dark': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\"), linear-gradient(to bottom right, #0f172a, #1e293b)",
                'nordic-clouds': "url('/Users/laetitia/.gemini/antigravity/brain/5433e137-c2ee-4174-8957-d28738ada271/nordic_clouds_1765815775128.png')",
            }
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}",
        "./screens/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            fontFamily: {
                playfair: ['PlayfairDisplay-Regular', 'serif'],
                playfairBold: ['PlayfairDisplay-Bold', 'serif'],
                playfairMedium: ['PlayfairDisplay-Medium', 'serif'],
                playfairRegular: ['PlayfairDisplay-Regular', 'serif'],
                playfairSemibold: ['PlayfairDisplay-Semibold', 'serif'],
                playfairLight: ['PlayfairDisplay-Light', 'serif'],
            },
            fontSize: {
                base: '1rem',
                sm: '0.875rem',
                lg: '1.125rem',
            },
            colors: {
                light: {
                    surface: "#F5F2EC",
                    primary: "#A00000"
                },
                dark: {
                    surface: "#101010",
                },
                primary: {
                    DEFAULT: '#A00000',
                    light: '#FF00FF',
                    dark: '#000000',
                },
                primaryShadow: {
                    DEFAULT: '#D9CFBE',
                    dark: '#040404',
                },
                secondary: {
                    DEFAULT: '#FFFFFF',
                    light: '#FFFFFF',
                    dark: '#FFFFFF',
                },
                tertiary: {
                    DEFAULT: '#A00000',
                    light: '#FF0000',
                    dark: '#FF0000',
                },
                surface: {
                    DEFAULT: '#101010',
                    light: '#101010',
                    dark: '#101010',
                },
                surfaceContainer: {
                    DEFAULT: '#1a1a1a',
                    light: '#EFE8DC',
                    dark: '#3f3f3f',
                },
                onSurface: {
                    DEFAULT: '#827775',
                    light: '#827775',
                    dark: '#F5F2EC',
                },
            }
        },
    },
    plugins: [],
}


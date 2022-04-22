module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'vortezz': {
                    'white': '#fff',
                    'gray2': '#363535',
                    'gray3': '#464545',
                    'gray4': '#666565',
                    'gray5': '#888585',
                    'gray1': '#292727',
                    'purple': '#8B5CF6',
                    'red': '#ec2c44',
                },
            },
            rotate: {
                '4': '4deg',
            }
        },
        fontFamily: {
            'ubuntu': ['Ubuntu', 'sans-serif'],
        }
    },
    plugins: [],
}

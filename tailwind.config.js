module.exports = {
    purge: [
        './src/**/*.njk',
        './src/**/*.svg',
        './src/**/*.html'
    ],
	theme: {
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px'
        },
        extend: {
            spacing: {
                "0.5": "0.125rem",
                "7": "1.75rem",
                "9": "2.25rem"
            },
            flex: {
                "single": "0 0 100%",
                "double": "0 0 50%",
                "triple": "0 0 33.333333%"
            },
            fontSize: {
                "tiny": "0.925rem"
            }
        }
    }
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    theme: {
      extend: {
        colors: {
          'wood': {
            50: '#fdf8f6',
            100: '#f2e8e5',
            200: '#eaddd7',
            300: '#e0cec7',
            400: '#d2bab0',
            500: '#bfa094',
            600: '#a18072',
            700: '#977669',
            800: '#846358',
            900: '#43302b',
          },
          'brown': {
            light: '#D2691E',
            DEFAULT: '#8B4513',
            dark: '#654321',
          }
        },
        backgroundImage: {
          'wood-gradient': 'linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #A0522D 100%)',
          'brown-gradient': 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
        },
        animation: {
          'fadeInUp': 'fadeInUp 1s ease',
          'fadeInUpDelay': 'fadeInUp 1s ease 0.2s backwards',
          'fadeInUpDelay2': 'fadeInUp 1s ease 0.4s backwards',
          'fadeInUpDelay3': 'fadeInUp 1s ease 0.6s backwards',
          'floatBooks': 'floatBooks 60s linear infinite',
        },
        keyframes: {
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          floatBooks: {
            '0%': { backgroundPosition: '0 0, 80px 90px, 140px 50px' },
            '100%': { backgroundPosition: '0 180px, 80px 270px, 140px 230px' },
          },
        },
      },
    },
    plugins: [],
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: ['./index.html',
        './src/**/*.{js,jsx,ts,tsx}'  //esto también es una forma de englobar subdirectorios
    ],
    theme: {
        extend: {
            colors: {
                fondo: "#EBEBEB",
                primary: {
                    100: '#a2c8f9',
                    200: '#74adf7',
                    300: '#4692f4',
                    400: '#2f84f3',
                    500: '#1877F2',
                    600: '#1053a9',
                    700: '#0c3b79',
                    800: '#072348',
                    900: '#42E2A2',
                    950: '#212227',
                },
                secondary: {
                    100: '#5e5f66',
                    200: '#6e6f75',
                    300: '#7e7e84',
                    400: '#8e8f93',
                    500: '#9e9fa3',
                    600: '#aeafb2',
                    700: '#bebfc1',
                    800: '#cecfd1',
                    900: '#dedfe0',
                },
                tertiary: {
                    300: '#B52929',
                    400: '#c35353',
                    500: '#da9494',
                },
            },
            backgroundImage: {
                paisajeMain : "url('./public/assets/wp4192320.jpg')",
                'paisaje2': "url('https://wallpapercave.com/dwp1x/wp4192372.jpg')",
              }
        }
    },
    variants: {},
    plugins: []
}



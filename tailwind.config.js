/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: ['./index.html',
        './src/**/*.{js,jsx,ts,tsx}'  //esto también es una forma de englobar subdirectorios
    ],
    theme: {
        extend: {}
    },
    variants: {},
    plugins: []
}



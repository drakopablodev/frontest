/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    important: true,    // Todas las clases de Tailwind pasan a ser `!important`
    prefix: 'tw-',      // Prefijo utilizado para llamar a las clases de Tailwind CSS
    corePlugins: {
      preflight: false  // Sin esta opción, se rompen los estilos de OnMain
    },
    content: [ // Ruta donde encontrar los archivos a los que aplicar Tailwind CSS
      "./web/Main/Web/**/*.{html,jsp}",
      "./web/Main/libInterfaz/**/*.{html,jsp}",
      "./web/Main/js/**/*.{js, jsx}",
      /* Menu principal */
      "./web/Main/*.{html,jsp}",
      "./web/Main/*.{js,jsx}",
      "./**/*.{html,jsp,js}",
      "./*.{html,jsp,js}"
    ],
    theme: {
      /* Extensiones de variables */
      extend: {
          borderRadius: {
              '4xl': '18px',
              '5xl': '20px',
          },
          colors: {     
            'background': '#FFFFFF',
            primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
            /* Konetic colors */
            'konetic': {
                'black': {
                    '1': '#252A36', // *
                    '2': '#2f2f2f',
                    '3': '#181717',
                    '4': '#212121',
                    '5': '#2b2b2b'
                },
                'blue': {
                    '1': '#2856CF', // *
                    '2': '#5C88DA', // * '#6E8EE3'
                    '3': '#D4DEF7'  // *
                },
                'cyan': '#00f0f0',                
                'gray': {
                    '1': '#9099BA', // *
                    '2': '#ddd',
                    '3': '#333333',
                    '4': '#4c565e',
                    '5': '#dbdbdb',
                    '6': '#5f5f5f'
                }, 
                'green': '#00ff00',
                'white': {
                    '1': '#FFFFFF', // *
                    '2': '#f9f9f9',
                    '3': '#ebebe4'
                },
                'yellow': '#fff000'
            }
          },
          fontFamily : {
              'colabo-th-reg': ['colaborate-thin-regular', 'sans-serif'],
              'poppins': ['Poppins', 'sans-serif'],
              'nunito-sans': ['Nunito Sans', 'sans-serif']
          },
          margin: {
            '5px': '5px',
            '2.5%': '2.5%'
          }, 
          padding: {
            '7.5': '30px',
            '8.5': '34px',
            '9.5': '38px'
          },
          screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }      
            'md': '768px',
            // => @media (min-width: 768px) { ... }      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          },
          transform: ['hover', 'focus', 'active', 'disabled'],
          transitionDuration : {
            '400': '400ms'
          },
          width: {
              '250px': '250px'
          }
      }
    },
    plugins: []
};
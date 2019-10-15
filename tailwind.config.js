module.exports = {
  theme: {
    fontFamily: {
            'display': ['Playfair Display'],
            'body': ['Poiret One'],
            'landing': ['Liu Jian Mao Cao'],
    },
    extend: {
        colors: {
            appgrey: '#15151b',
            appteal: '#1C2F2D',
            appteal2: '#2f4f4c',
            appgold: '#d7b740',
            appgrey: '#B9B9BB',
            appwhite: '#E8E9ED',
            appred: '#ff1a21'   
        },
        fontSize: {
            '8xl': '5rem',
            '10xl': '10rem'
        },
        spacing: {
            '68': '18rem',
            '72': '22rem',
            '80': '24rem',
            '96': '28rem',
            '128': '32rem',
        }
    },
    screens: {
            'xxs': '320px',
            'xs': '375px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            'xl2': '1630px'
    }
  },
  variants: {
        borderRadius: ['responsive', 'hover', 'focus'],
        padding: ['responsive', 'hover', 'focus'],
  },
  plugins: []
}
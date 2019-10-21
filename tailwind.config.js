module.exports = {
  theme: {
    fontFamily: {
            'display': ['Playfair Display'],
            'body': ['Poiret One'],
            'landing': ['Sorts Mill Goudy']
    },
    extend: {
        colors: {
            appteal: '#0a1c1c',
            appgold: '#a48623',    
            appgreen: '#4C9D77',    
        },
        fontSize: {
            '8xl': '5rem',
            '10xl': '7rem'
        },
        spacing: {
            '28': '7.5rem',
            '68': '18rem',
            '72': '22rem',
            '80': '24rem',
            '96': '28rem',
            '128': '32rem',
        },
        letterSpacing: {
            loose: '0.8em',
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
  variants: {},
  plugins: []
}
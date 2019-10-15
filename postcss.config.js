const tailwindcss = require('tailwindcss')
const purgecss = require("@fullhuman/postcss-purgecss")
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        cssnano({
            preset: 'default'
        }),
        purgecss({
            content:['*.html'],
            defaultExtractor: content => content.match(/[A-Za-z)-9-_:/]+/g) || []
        }),
        autoprefixer
    ]
}






   
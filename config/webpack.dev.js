const path = require('path')

const paths = require('./paths')
const ruleJS = require('./rule/ruleJS')

module.exports = {
    entry: {
        main: [
            require.resolve('./polyfills-client.js'),
            path.resolve(paths.src, 'index.js')
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(paths.root, 'public', 'build'),
        publicPath: '/'
    },
    module: {
        rules: [
            ruleJS.dev
        ]
    },
    devServer: {
        port: 8001,
        inline: true
    }
}
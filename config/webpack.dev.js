const path = require('path')
const webpack = require('webpack')

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
        publicPath: 'http://localhost:8001/'
    },
    module: {
        rules: [
            ruleJS.dev
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        port: 8001,
        inline: true,
        hotOnly: true,
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:8000' },
        noInfo: true,
        historyApiFallback: true,
        compress: true
    }
}
const path = require('path')

const root = path.resolve(__dirname, '..')

module.exports = {
    entry: './web/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(root, 'public', 'build'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'stage-2']
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 8001,
        inline: true
    }
}
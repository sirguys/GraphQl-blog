const paths = require('../paths')

const babelPresets = [
    [
        'env',
        {
            targets: {
                browsers: ['last 2 versions', 'ie >= 10']
            },
            modules: false,
            useBuiltIns: false,
            loose: true,
            debug: true
        }
    ], 
    'react',
    'stage-2', 
]

const transformRuntime = [
    'transform-runtime',
    {
        helpers: true,
        polyfill: false,
        regenerator: true
    }
]

const dev = {
    test: /\.(js|jsx)$/,
    include: paths.src,
    use: [
        {
            loader: 'babel-loader',
            options: {
                presets: babelPresets,
                plugins: [transformRuntime]
            }
        }
    ]
}

module.exports = {
    dev,
}
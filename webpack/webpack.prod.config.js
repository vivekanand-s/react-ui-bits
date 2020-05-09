const path = require('path')
var nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: 'production',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, '../lib'),
        filename: 'index.js'
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: [
                    /(node_modules|__tests__)/
                ],
                loader: 'babel-loader'
            }
        ]
    },
    externals: [nodeExternals()]
}
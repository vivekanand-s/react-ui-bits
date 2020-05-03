const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['@babel/polyfill', './main.js'],
    output: {
        path: path.join(__dirname, '/bundle'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },
    devServer:{
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    externals: {
        'react': 'commonjs react',
        'react-dom': 'commonjs react-dom',
     },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}
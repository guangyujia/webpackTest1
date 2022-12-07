const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        library: {type: 'var', name: 'MyLibrary'},
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching'
        })
    ]
}
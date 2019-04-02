const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const devServerContentLocation = 'build/webDevServerTemp';

module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, devServerContentLocation),
        "filename": "[name].[chunkhash:8].js"
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8443'
            }
        },
        port: 3000,
        contentBase: path.join(__dirname, devServerContentLocation),
        compress: false,
        historyApiFallback: true,
        hot: false,
        noInfo: false
    },
    plugins: [
        new CleanWebpackPlugin([devServerContentLocation]),
        new CopyWebpackPlugin(
            [{ from: 'public', to: '', ignore: [ '*.html' ], force: false }],
            { copyUnmodified: false }
        ),
        new WriteFileWebpackPlugin()
    ]
});

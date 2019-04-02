const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const prodBuildDirectory = 'build/web';

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, prodBuildDirectory),
        "filename": "[name].[chunkhash:8].js"
    },
    plugins: [
        new CleanWebpackPlugin([prodBuildDirectory]),
        new CopyWebpackPlugin(
            [{ from: 'public', to: '', ignore: [ '*.html' ], force: false }],
            { copyUnmodified: false }
        ),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
});
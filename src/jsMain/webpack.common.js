const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["../../build/kotlin-js-min/js/main/hidden-legends.js"],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, '../../build/kotlin-js-min/js/main')
                ],
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ],
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'node_modules/@jetbrains'),
            path.resolve(__dirname, '../../build/kotlin-js-min/js/main')
        ],
        alias: {
            'Components': path.resolve(__dirname, "kotlin/com/runt9/hiddenLegends")
        }
    },
    devtool: "source-map",
    context: __dirname,
    target: "web",
    stats: "normal",
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'starter',
            filename: 'index.html',
            template: 'public/index.html',
            unsupportedBrowser: true,
            appMountIds: ['root']
        })
    ]
};
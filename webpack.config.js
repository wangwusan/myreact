const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
module.exports = {
    entry:'./src/index.jsx',
    output:{
        path:path.resolve(__dirname,"build"),
        filename:'bundle.js'
    },
    resolve:{
        extensions:[ '.js','.jsx']
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(gif|jpg|png)\??.*$/,
                exclude: /(node_modules)/,
                loader: 'url-loader?limit=8192&name=[hash:8].[name].[ext]&publicPath=../../&outputPath=static/images/'
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                exclude: /(node_modules)/,
                loader: 'url-loader?name=static/fonts/[hash:8].[name].[ext]&publicPath=../../&outputPath=static/font/'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                        }
                    ]
                })
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.tmpl.html',
        }),
        new ExtractTextPlugin({
            filename:"static/css/[hash].css"
        })
    ]
}
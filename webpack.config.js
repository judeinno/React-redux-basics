const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack =require("webpack")
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

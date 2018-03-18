const path = require('path')
const webpack =require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
        // publicPath: '/dist/'
    },
    resolve: {
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@component': path.resolve(__dirname, 'src/component')
        }
    },
    plugins: [
        //html处理
        new htmlWebpackPlugin({
            template: './src/index.html',
            favicon: path.resolve(__dirname, 'favicon.ico')
        }),
        //抽离css样式（打包在js时，加载时空白长）
        new ExtractTextPlugin("css/[name].css"),
        //抽取公共
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        })
    ],
    devServer: {
        // contentBase: './dist',
        port: 8086,
        historyApiFallback: {
            index: '/dist/index.html'
        }
    },
    module: {
        rules :[
            //jsx处理
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            //css处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            //styl处理
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    //use: "css-loader!stylus-loader"
                    use: ['css-loader', 'stylus-loader']
                })
            },
            //图片处理
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            },
            //字体图标处理
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
}
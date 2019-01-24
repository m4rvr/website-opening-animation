const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

module.exports = (env, options) => {
    const isDevMode = options.mode !== 'production'
    const modeConfig = require(`./webpack.${options.mode}.config.js`)

    const commonConfig = {
        entry: path.resolve(__dirname, 'src/js/index.js'),
        resolve: {
            alias: {
                '$scss': path.resolve(__dirname, 'src/scss/'),
                '$js': path.resolve(__dirname, 'src/js/'),
                '$fonts': path.resolve(__dirname, 'src/fonts/'),
                '$app': path.resolve(__dirname, 'src/'),
                '$assets': path.resolve(__dirname, 'src/assets/')
            }
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                minimize: false
                            }
                        }
                    ]
                },
                {
                    test: /\.s?[ac]ss$/,
                    use: [
                        {
                            loader: isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                // Removed because of issue: https://github.com/webpack-contrib/style-loader/issues/352
                                //sourceMap: false
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                // Removed because of issue: https://github.com/webpack-contrib/style-loader/issues/352
                                //sourceMap: false
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    (autoprefixer)({
                                        'browsers': ['> 1%', 'last 2 versions']
                                    })
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/'
                            }
                        }
                    ]
                },
                {
                    test: /\.(jpg|png|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8000,
                                fallback: 'file-loader',
                                name: './assets/[hash].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.(mp4)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: './assets/[name].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html'),
                filename: 'index.html'
            })
        ]
    }

    return merge.smart(commonConfig, modeConfig)
}
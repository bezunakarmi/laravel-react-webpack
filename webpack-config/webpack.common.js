const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');


module.exports = {
    entry: {
        'vendor': helpers.root('/resources/assets/js/src/vendor.js'),
        'app': helpers.root('/resources/assets/js/src/main.js')
    },

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 50000,
                    mimetype: 'application/font-woff',
                    name: 'name=assets/fonts/[name].[ext]',
                },
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: ["file-loader?name=assets/images/[name].[ext]",
                    {
                        loader: 'image-webpack-loader',
                        options: {}
                    }]
            },

            // {
            //     test: /\.(ttf|eot|woff|woff2)$/,
            //     loader: 'file-loader?name=assets/fonts/[name][hash].[ext]'
            // },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: 'css-loader&importLoaders=1',
                })
            }
            , {
                test: /(\.scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true

                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [require('autoprefixer')];
                                }
                            }
                        },
                        'sass-loader?sourceMap=map'
                    ]
                })
            }
        ]
    },

    plugins: [

        new webpack
            .optimize
            .CommonsChunkPlugin({
                name: ['app', 'vendor']
            }),

        new ExtractTextPlugin({
            filename: 'app.css',
            allChunks: true
        }),

        // new HtmlWebpackPlugin({ template: 'src/index.html' })

    ]

}
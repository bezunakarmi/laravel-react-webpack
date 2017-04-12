const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('/public/dist'),
        // publicPath :'/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    devtool: 'source-map',

    plugins: [
        new ExtractTextPlugin('[name].css')

    ],

    devServer: {
        stats: 'minimal'
    }

})
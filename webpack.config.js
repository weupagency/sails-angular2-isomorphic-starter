var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './config/boot.ts',
        'vendor': './config/vendor.ts'
    },
    target: 'web',
    output: {
        path: __dirname + '/assets/dist/client',
        publicPath: '/assets/dist/client',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};
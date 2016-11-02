var webpack = require('webpack');
var path = require('path');

module.exports = {
    watch: true,
    entry: {
        common: ['react', 'react-dom', 'redux'],
        index: ["./app.js"]
    },
    output: {
        publicPath: '/static/dist/',
        path: path.join(__dirname, '/static/dist'),
        chunkFilename: '[chunkhash:8].chunk.js',
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.bundle.js'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-runtime']
            }
        }, {
            test: /\.(less|css)?$/,
            loader: 'style!css',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

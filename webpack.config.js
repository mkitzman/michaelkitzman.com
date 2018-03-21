const webpack = require('./node_modules/webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

//Set up ability to use environment variables for url
const BUILD_ENV = process.env.ENV || 'local';
const baseEnv = require('./conf/webpack/define/base');
const env = Object.assign({}, baseEnv, require('./conf/webpack/define/' + BUILD_ENV));
const prod = BUILD_ENV === 'prod';
process.env.NODE_ENV = prod ? 'production' : 'local';

console.log('process.env.NODE_ENV:', process.env.NODE_ENV);


const PUBLIC_PATH = '/';

const plugins = [
    new HTMLWebpackPlugin({
        template: __dirname + '/src/index.html',
        filename: 'index.html',
        inject: 'body',
        favicon: './src/images/favicon.ico'
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        },
        '$ENV': JSON.stringify(env)
    }),
    new ExtractTextPlugin('bundle.css'),
    new StyleLintPlugin({
        files: '**/styles/*.css',
        configFile: '.stylelintrc',
        failOnError: false,
        emitErrors: true,
        quiet: false
    }),
    new SWPrecacheWebpackPlugin({
        cacheId: 'michaelkitzman',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        navigateFallback: PUBLIC_PATH + 'index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
    }),
    new WebpackPwaManifest({
        name: 'Mike Kitzman',
        short_name: 'MikeK',
        description: 'Mike Kitzman Personal Site',
        background_color: '#FFFFFF',
        theme_color: '#3E3F3F',
        'theme-color': '#3E3F3F',
        inject: true,
        ios: true,
        icons: [
            {
                src: './src/images/icon.png',
                sizes: [96, 128, 192, 256, 384, 512],
                ios: true,
                destination: path.join('assets', 'icons')
            }
        ]
    })
];

if (prod) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        uglifyOptions: {
            compress: true
        },
        sourceMap: false,
        output: {
            comments: false
        },
        comments: false
    }));
}

module.exports = {
    entry: __dirname + '/src/index.js',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.js', '.es6.js', '.css'],
        modules: ['node_modules', './src/']
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'

            },
            {
                test: /\.NOTUSEDcss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            minimize: true
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                minimize: true
                            }},
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.(png|jp(e*)g||\.ico$|svg)$/,  
                use: ['file-loader?name=images/[name].[ext]']
            }
        ]
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/public',
        publicPath: PUBLIC_PATH
    },
    plugins: plugins
};
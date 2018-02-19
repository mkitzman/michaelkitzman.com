const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const plugins = [
    new HTMLWebpackPlugin({
        template: __dirname + '/src/index.html',
        filename: 'index.html',
        inject: 'body',
        favicon: './src/images/favicon.ico'
    }),
    new ExtractTextPlugin('bundle.css'),
    new StyleLintPlugin({
        files: '**/styles/*.css',
        configFile: '.stylelintrc',
        failOnError: false,
        emitErrors: true,
        quiet: false
    })
];

module.exports = {
    entry: ['babel-polyfill', __dirname + '/src/index.js'],
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
        path: __dirname + '/public'
    },
    plugins: plugins
};
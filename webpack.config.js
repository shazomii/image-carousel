const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const isDev = env.development;

    return {
        mode: isDev ? 'development' : 'production',
        entry: isDev ? './src/index.dev.js' : './src/index.js',
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: {
            static: './dist',
        },
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
            library: 'imageCarousel',
            libraryTarget: 'umd',
            globalObject: 'this',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                },
            ],
        },
    };
};

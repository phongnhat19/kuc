const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.resolve(__dirname, 'src/lib/index.ts'),
    output: {
        path: path.resolve(__dirname, './build/lib'),
        filename: 'index.js',
        library: '',
        libraryTarget: 'commonjs'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    externals: [nodeExternals()],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-typescript"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "production",
    entry: "./src/js/index.js",
    output: {
        filename: "main.bundle.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            },
            {
                test: /\.(png|svg|jpg|gif|PNG|JPEG|webp)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ]
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
	    minimizer: [
	        new TerserPlugin({
	            test: /\.js$/i,
	            exclude: /node_modules/
	        })
	    ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}

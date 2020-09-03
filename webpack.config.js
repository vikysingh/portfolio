const path = require("path")

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|svg|jpg|gif|PNG)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    entry: "./src/js/index.js",
    output: {
        filename: "main.bundle.js",
        path: path.resolve(__dirname, "build")
    }
}
const path = require('path');

const PATHS = {
    indexJs: path.join(__dirname, "views/index.js"),
    build: path.join(__dirname, "public/bundle")
};

module.exports = {
    entry: ["babel-polyfill", PATHS.indexJs],
    output: {
        path: PATHS.build,
        filename: "bundle.js"
    },
    mode: "production",
    resolve: {
        extensions: [".json", ".js", ".jsx"]
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
}
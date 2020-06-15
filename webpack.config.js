const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

function resolve(x) {
    return path.resolve(__dirname, x)
}

module.exports = {
	mode: "development",
    entry: {
        main: resolve("src/main.ts")
    },
    output: {
        path: resolve('dist'),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                use: ["babel-loader", "awesome-typescript-loader"]
            }
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    devServer: {
        port: 6000,
        contentBase: path.resolve(__dirname, "dist/")
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};

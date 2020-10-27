const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

function resolve(x) {
    return path.resolve(__dirname, x)
}

module.exports = {
	target: "node",
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
				test: /\.js$/,
				loader: "babel-loader"
			},
			{
				test: /\.ts$/,
				loader: "awesome-typescript-loader"
			}
        ]
    },
    resolve: {
        alias: {
            "@": resolve("src")
        },
		extensions: [".ts"]
	},
    devServer: {
        port: 6000,
        contentBase: resolve("dist/")
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};

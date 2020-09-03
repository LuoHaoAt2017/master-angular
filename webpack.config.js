const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')

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
				test: /\.js$/,
                loader: "babel-loader",
            },
            {
				test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
				test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
        ]
    },
    resolve: {
        alias: {
            "@": resolve("src")
        },
		extensions: [".ts", ".js", ".vue"]
	},
    devServer: {
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve("public/index.html")
        }),
        new VueLoaderPlugin()
    ]
};

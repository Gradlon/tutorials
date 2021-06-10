var webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	output: {
    path: __dirname + "/dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
 	},
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["env", "react"]
				}
			},
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      }
		]
	}
}

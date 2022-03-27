const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlPlugin({
  template: "src/index.html",
  filename: "index.html",
});

module.exports = {
  // development or production
  mode: "development",
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/main.js",
  },
  plugins: [htmlPlugin],
  devServer: {
    open: true,
    host: "127.0.0.1",
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      {
        test: /\.jpg|png|gif$/,
        use: "url-loader?limit=2000&outputPath=images",
      },
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
    ],
  },
};

const path = require("path");
const scss = require("./webpack/scss");
const entries = require("./webpack/entries").entry;
const aliases = require("./webpack/aliases");

module.exports = {
  mode: "development",
  /*  entry: [
      "./src/index.js"
    ],
  */

  entry: entries,
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "[name]-bundle.js",
  },
  resolve: {
    alias: aliases,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      scss.rule,
    ],
  },
  plugins: [...scss.plugins],
};

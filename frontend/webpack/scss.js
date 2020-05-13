const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // eslint-disable-line import/no-extraneous-dependencies
const StyleLintPlugin = require("stylelint-webpack-plugin"); // eslint-disable-line import/no-extraneous-dependencies

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  rule: {
    test: /\.(scss|sass|css)$/,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "sass-loader",
        options: {
          sourceMap: true,
        },
      }
    ],
    /*
        test: /\.(scss|sass|css)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
              modules: true,
              importLoaders: true
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
    */
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name]/[name]${devMode ? "-" : "-[contenthash]-"}bundle.css`,
    }),
    new StyleLintPlugin(),
  ],
};

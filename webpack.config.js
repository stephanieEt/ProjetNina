const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: [
    path.resolve(__dirname, "./assets/bootstrap/bootstrap.bundle.min.js"),
    path.resolve(__dirname, "./assets/maugallery.js"),
    path.resolve(__dirname, "./assets/scripts.js"),
    path.resolve(__dirname, "./assets/bootstrap/bootstrap.min.css"),
    path.resolve(__dirname, "./assets/style.css"),
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.min.js",
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(css)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.min.css",
    }),
  ],
  optimization: {
    minimizer: [
      "...",
      new CssMinimizerPlugin({
        test: /\.(css)$/i,
      }),
    ],
    minimize: true,
  },
};

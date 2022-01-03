const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const configBase = require("./webpack.config");
configBase.plugins.push(
  new MiniCssExtractPlugin({ filename: "style/[name].[contenthash].css" })
);

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  ...configBase,
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};

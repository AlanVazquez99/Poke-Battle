const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const configBase = require("./webpack.config");

configBase.output.filename = "[name].js";
configBase.module.rules.push(
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
    generator: { filename: "static/images/[name][ext]" },
  },

  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
    generator: { filename: "static/fonts/[name][ext]" },
  }
);

configBase.plugins.push(
  new MiniCssExtractPlugin({ filename: "style/[name].css" })
);

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  ...configBase,
  mode: "development",
  devtool: "source-map",
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    liveReload: true,
    port: 5000,
    open: true,
    client: {
      logging: "log",
      overlay: true,
      reconnect: true,
    },
  },
};

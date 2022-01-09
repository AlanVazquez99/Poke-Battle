const path =  require("path");
const fs = require("fs");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: path.resolve(__dirname, "src/scripts/main.js"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "src/[name].[contenthash].js",
  },

  resolve: {
    extensions: [".js"],
    alias: {
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@html": path.resolve(__dirname, "public"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@scripts": path.resolve(__dirname, "src/scripts"),
      "@router": path.resolve(__dirname, "src/scripts/router"),
      "@templates": path.resolve(__dirname, "src/scripts/templates"),
      "@components": path.resolve(__dirname, "src/scripts/components"),
      "@utils": path.resolve(__dirname, "src/scripts/utils"),
      "@views": path.resolve(__dirname, "src/scripts/views"),
    },
  },

  module: {
    rules: [
      { test: /\.html$/i, loader: "html-loader" },
      {
        test: /\.(css|styl)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: { filename: "static/images/[name].[contenthash][ext]" },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: { filename: "static/fonts/[name].[contenthash][ext]" },
      },
    ],
  },

  plugins: [
    ...fs
      .readdirSync("public")
      .filter((file) => file.endsWith(".html"))
      .map(
        (template) =>
          new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, "public", template),
            filename: template,
          })
      ),
  ],
};

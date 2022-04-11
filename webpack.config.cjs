const webpack = require("webpack");
const path = require("path");

module.exports = {
  plugins: [new webpack.SourceMapDevToolPlugin({
    filename: '[name].js.map',
    exclude: [/(node_modules|bower_components)/]
  })],
  optimization: {
    usedExports: true,
  },
  mode: "production",
  target: "es5",
  entry: {
    index: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: {
      type: "window",
      name: "[name]",
    },
    chunkFormat: "array-push",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /(\.m?js$|\.tsx?$)/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/typescript",
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  targets: "defaults",
                  corejs: 3,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};

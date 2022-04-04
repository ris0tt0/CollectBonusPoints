const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app: path.resolve(__dirname, "../src/index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {},
        },
      },
    ],
  },
};

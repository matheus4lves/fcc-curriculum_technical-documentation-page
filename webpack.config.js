const path = require("path");
const postCSSPlugins = [require("postcss-mixins"), require("postcss-simple-vars"), require("postcss-nested"), require("postcss-import"), require("autoprefixer")];

module.exports = {
  entry: "./app/assets/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: postCSSPlugins,
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    host: "local-ip",
    hot: true,
    open: {
      app: {
        name: "firefox",
      },
    },
    port: 3000,
    static: {
      directory: path.join(__dirname, "app"),
    },
  },
};

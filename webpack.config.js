/* eslint-disable */
const path = require("path");
const port = 3000;

module.exports = env => {
  const { type } = env;
  const output = type === "development" ? "public" : "dist";

  return {
    entry: "./src/index.ts",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "babel-loader"
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src/")
      }
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, output)
    },
    devServer: {
      stats: {
        children: false, // Hide children information
        maxModules: 0 // Set the maximum number of modules to be shown
      },
      contentBase: path.join(__dirname, output),
      compress: true,
      overlay: true,
      open: true,
      watchContentBase: true,

      port
    }
  };
};

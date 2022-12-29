/* eslint-disable */
const path = require("path");
const port = 3000;

module.exports = env => {
  const { type } = env;
  const output = type === "development" ? "public" : "dist";

  console.log("output", output);

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
      extensions: [".tsx", ".ts", ".js"]
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, output)
    },
    devServer: {
      contentBase: path.join(__dirname, output),
      compress: true,
      port
    }
  };
};

const path = require("path");
var buildPath = "WebContent/public/scripts";
var devServerPath = "WebContent";
module.exports = {
  entry: "./srcjsx/app.js",
  output: {
    path: path.join(__dirname, buildPath),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: buildPath,
    proxy: [
      {
        // index: '/Basic-Servlet',
        context: ["/LoginServlet", "/LogoutServlet", "/basic-servlet"],
        target: `http://127.0.0.1:8080/`,
        // secure: false,
        // changeOrigin: true,
        headers: { host: "localhost:4200" }
      }
    ]
  }
};

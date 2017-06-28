import path from "path";
import webpack from "webpack";

let config = {
  entry: {
    main: './main.ts'
  },
  context: path.resolve(__dirname, "../app"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  module: {
    loaders: [
      {
        test: /\.ts$/, loader: "awesome-typescript-loader"
      }
    ]
  }
}

function scripts() {
  return new Promise(resolve => webpack(config, (err, stats => {
    if(err) {
      console.log("Webpack", err);
    }
    console.log(stats.toString({/* stats options */}));
    resolve();
  })));
}

module.exports = { config, scripts };

const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node', // to ignore built-in modules (path, fs..)
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        loader: 'ts-loader',
        exclude: [/node_modules/],
        options: {
          transpileOnly: true,
          configFile: 'tsconfig.json'
        }
      },
    ],
  },
  mode: 'development', // slsw.lib.webpack.isLocal ? 'development': 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js'
  },
  externals: [nodeExternals()] // to ignore all modules in node_modules
};

const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const { IgnorePlugin } = require('webpack');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node', // to ignore built-in modules (path, fs..)
  // optimization: {
  //   concatenateModules: false,
  // },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        loader: 'ts-loader',
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.serverless'),
            path.resolve(__dirname, '.webpack'),
          ],
        ],
        options: {
          transpileOnly: true,
          configFile: 'tsconfig.json'
        }
      },
    ],
  },
  mode: slsw.lib.webpack.isLocal ? 'development': 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js'
  },
  // externals: [nodeExternals({allowlist: ['pg']})], // to ignore all modules in node_modules
  plugins: [
    new IgnorePlugin({
      resourceRegExp: /^pg-native$/,
    }),
  ],
};

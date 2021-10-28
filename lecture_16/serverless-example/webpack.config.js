const path = require('path');
const slsw = require('serverless-webpack');
const { IgnorePlugin } = require('webpack');

const mode = slsw.lib.webpack.isLocal ? 'development': 'production';
console.log(`Webpack mode: ${mode}`);

module.exports = {
  entry: slsw.lib.entries,
  target: 'node', // to ignore built-in modules (path, fs..)
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
  mode,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js'
  },
  plugins: [
    new IgnorePlugin({
      resourceRegExp: /^pg-native$/,
    }),
  ],
};

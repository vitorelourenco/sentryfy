const path = require('path');

module.exports = {
  entry: {
    conversionTracker: './conversionTracker/conversionTracker.ts',
    purchaseTrigger: './purchaseTrigger/purchaseTrigger.ts',
  },
  mode: 'production',
  target: 'es5',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      type: 'window',
      name: '[name]',
    },
    chunkFormat: 'array-push',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /(\.m?js$|\.tsx?$)/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/typescript',
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  targets: 'defaults',
                  corejs: 3,
                  debug: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};

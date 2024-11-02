const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    content: './src/content.ts',
    popup: './src/popup.ts'  // Add popup.ts as a new entry
  },
  output: {
    filename: '[name].js', // This will output both content.js and popup.js
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

const path = require('path');

module.exports = {
  mode: 'production', // Use 'development' if you want unminified output for debugging
  entry: './src/content.ts', // Your main file
  output: {
    filename: 'content.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
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
const path = require('path')

const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  entry: {
    popup: path.join(__dirname, 'src', 'popup', 'popup.js'),
    content: path.join(__dirname, 'src', 'content', 'content.js'),
    background: path.join(__dirname, 'src', 'background', 'background.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: true,
    port: 5000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/bg.html', to: 'bg.html' },
      { from: 'src/popup/popup.html', to: 'popup.html' },
      { from: 'src/content/overlay.html', to: 'overlay.html' },
      { from: 'src/content/overlay.css', to: 'overlay.css' },
      { from: 'src/content/overlay.html', to: 'overlay.html' },
      { from: 'manifest.json', to: 'manifest.json' },
      { from: 'images/', to: 'images/' }
    ]),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    })
  ]
}

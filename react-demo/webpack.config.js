const webpack = require('webpack')
      path = require('path')
      Dashboard = require('webpack-dashboard'),
      DashboardPlugin = require('webpack-dashboard/plugin'),
      dashboard = new Dashboard(),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ROOT_PATH = path.resolve(__dirname),
      SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
  entry: "./src/PictureGallary.js",
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'js/[name]-[hash:5].js'
  },
  resolve: {
    extensions: ['.js','.json','.less','.jsx']
  },
  module: {
    rules : [
      {
        test: /.jsx?$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src')
      }, {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new DashboardPlugin(dashboard.setData),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}
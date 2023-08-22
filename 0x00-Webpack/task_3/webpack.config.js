const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
      header: './modules/header/header.js',
      body: './modules/body/body.js',
      footer: './modules/footer/footer.js',
    },
    performance: {
      maxAssetSize: 1000000,
      hints: false,
      maxEntrypointSize: 1000000,
    },
    plugins: [ new CleanWebpackPlugin(), new HtmlWebpackPlugin() ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    devServer: {
      contentBase: path.join(__dirname, './public'),
      compress: true,
      port: 8564,
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'public'),
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              "file-loader",
              {
                loader: "image-webpack-loader",
                options: {
                  bypassOnDebug: true,
                  disable: true,
                },
              },
            ],
          },
        ],
      },
};
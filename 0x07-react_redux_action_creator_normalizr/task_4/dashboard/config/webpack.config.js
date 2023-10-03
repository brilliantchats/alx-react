const path = require("path");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    context: path.resolve(__dirname, "../src"),
    entry: "./index.js",
    devServer: {
        hot: true,
        compress: true,
        static: path.resolve(__dirname, "../dist")
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|gif|jpe?g|ico)$/,
                type: 'asset/resource',
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                          mozjpeg: {
                            progressive: true,
                          },
                          // optipng.enabled: false will disable optipng
                          optipng: {
                            enabled: false,
                          },
                          pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                          },
                          gifsicle: {
                            interlaced: false,
                          },
                          // the webp option will enable WEBP
                          webp: {
                            quality: 75
                          }
                        }
                      }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}
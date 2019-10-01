const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    "devServer": {
      contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                    exclude: [/node_modules/, /MSSQL/],
    
                    use: {
                      loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        },
                    }
              },
              {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
              },
              {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: ["file-loader"]
              }
        ]
    }
};
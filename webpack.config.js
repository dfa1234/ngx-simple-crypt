const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: ['./xorcipher.ts'],
    output: {
        filename: "./dist/xorcipher.min.js"
    },
    resolve: {
       extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
          test: /\.ts$/,
          use: 'ts-loader'
        }]
    },
    plugins: [
      new UglifyJSPlugin({minimize: true})
    ]
};

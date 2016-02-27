module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.scss$/,
              loader: 'style!css!sass'
            }
        ]
    }
};

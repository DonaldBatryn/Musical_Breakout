const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, './'),
        filename: "main.js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '*']
    }
    
};
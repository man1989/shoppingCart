const path = require("path");

module.exports = {
    entry: {
        "app": "./src/app.js"
    },
    output: {
        filename:"[name].js",
        path: path.resolve(__dirname, "../__build__")
    },
    module: {
        rules: [
          {
            test:/\.vue$/,
            include:[path.resolve(__dirname, '../src')],
            exclude:[
                path.resolve(__dirname, "../node_modules")
            ],
            loader: "vue-loader"
        }]
    }
};
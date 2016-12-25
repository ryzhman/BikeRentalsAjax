'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _defineProperty({
    entry: "./src/js/main.js",
    resolve: {
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js'
        }
    },
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.hbs/,
            loader: "handlebars-template-loader"
        }]
    }
}, 'module', {
    loaders: [{
        test: /\.html$/,
        loader: "html"
    }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react']
        }
    }],
    preLoaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
    }]
});
//# sourceMappingURL=webpack.config.js.map
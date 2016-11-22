var config = require("./webpack.config.js");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
config.entry.app.unshift("webpack-dev-server/client?http://80.12.83.208:80/");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    proxy: {
        '/api/*': {
            target: 'http://80.12.83.208:8080',
            secure: false
        }
    }
});
server.listen(80);
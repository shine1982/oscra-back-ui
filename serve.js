var config = require("./webpack.config.js");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8000/");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    proxy: {
        '/users/*': {
            target: 'http://localhost:8080',
            secure: false
        }
    }
});
server.listen(8000);
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../config/webpack.dev.config.js');

const port = process.env.PORT || 3000;

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
}));

app.use(webpackHotMiddleware(compiler));

app.listen(port, function() {
  console.log('Listening at http://localhost:' + port);
});

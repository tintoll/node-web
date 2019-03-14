const debug = require('debug')('app');
//const App = require('./src/Application');
const express = require('express');
const serveStatic = require('./middlewares/serve-static');
const logger = require('morgan');
const error = require('./routes/error');
const index = require('./routes/index');
const apiPost = require('./routes/api/post');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/', index.listPosts());
app.get('/api/posts', apiPost.index());
app.post("/api/posts", apiPost.create());
app.use(error.error404());
app.use(error.error());

debug('app is initiated');

module.exports = app;

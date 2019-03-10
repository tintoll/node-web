const debug = require('./utils/debug')('app');
const App = require('./src/Application');
const serveStatic = require('./middlewares/serve-static');
const logger = require('./middlewares/logger');
const error = require('./routes/error');
const index = require('./routes/index');

const app =  App();

app.use(logger());
app.use(serveStatic());
app.use('/', index.listPosts());
app.use(error.error404());
app.use(error.error());

debug('app is initiated');

module.exports = app;

const debug = require('./utils/debug')('app');
const App = require('./src/Application');
const serveStatic = require('./middlewares/serve-static');
const logger = require('./middlewares/logger');
const error = require('./routes/error');
const index = require('./routes/index');
const apiPost = require('./routes/api/post');
const bodyParser = require('./middlewares/body-parser');

const app =  App();

app.use(logger());
app.use(bodyParser());
app.use(serveStatic());
app.get('/', index.listPosts());
app.get('/api/posts', apiPost.index());
app.post("/api/posts", apiPost.create());
app.use(error.error404());
app.use(error.error());

debug('app is initiated');

module.exports = app;

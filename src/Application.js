const http = require('http');
const debug = require('../utils/debug')('Application');
const Middleware = require('./Middleware');
const Response = require('./Response');
const Request = require("./Request");


// 모듈 패턴은 자바스크립트 객체를 반환하는데요
const Application = () => {
  const _middleware = Middleware();

  const _server = http.createServer((req, res) => {
    _middleware.run(Request(req), Response(res));
  });

  const use = (path, fn) => {
    
    if( typeof path === 'string' && typeof fn === 'function') {
      fn._path = path;
    } else if (typeof path === 'function') {
      fn = path;
    } else {
      throw Error('Usage: use(path, fn) or use(fn)');
    }

    _middleware.add(fn);
  }

  const get = (path, fn) => {
    if (!path || !fn) throw Error('path and fn is required')
    fn._method = 'get'
    use(path, fn)
  }
  const post = (path, fn) => {
    if (!path || !fn) throw Error('path and fn is required')
    fn._method = 'post'
    use(path, fn)
  }

  const listen = (port = 3000, hostname = '127.0.0.1', fn) => {
    _server.listen(port, hostname, fn);
    debug('server is listening');
  };


  return {
    _middleware,
    _server,
    use,
    listen,
    get,
    post
  };
};


module.exports = Application;
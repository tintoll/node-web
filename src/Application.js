const http = require('http');
const debug = require('../utils/debug')('Application');
const Middleware = require('./Middleware');


// 모듈 패턴은 자바스크립트 객체를 반환하는데요
const Application = () => {
  const _middleware = Middleware();

  const _server = http.createServer((req, res) => {
    _middleware.run(req, res);
  });

  const use = fn => _middleware.add(fn);

  const listen = (port = 3000, hostname = '127.0.0.1', fn) => {
    _server.listen(port, hostname, fn);
    debug('server is listening');
  };


  return {
    _middleware,
    _server,
    use,
    listen
  };
};


module.exports = Application;
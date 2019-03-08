const http = require('http');
const debug = require('../utils/debug')('Application');
const path = require('path');
const fs = require('fs');
const serveStatic = require('./serve-static');

const _server = http.createServer((req, res) => {
  serveStatic(req, res);

  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html'); // html 렌더링하기 위해서

  // 현재경로(__dirname)
  const filePath = path.join(__dirname, '../public/index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;

    res.end(data);
  });

});


// 모듈 패턴은 자바스크립트 객체를 반환하는데요
const Application = () => {
  const listen = (port = 3000, hostname = '127.0.0.1', fn) => {
    _server.listen(port, hostname, fn);
    debug('server is listening');
  }


  return {
    _server,
    listen
  }
}


module.exports = Application;
const http = require("http"); // 노드 모듈을 가져온다.

// 서버를 만든다.
const server = http.createServer((req, res) => {
  // 요청이 오면 실행되는 콜백함수
  res.statusCode = 200; // 응답 상태값 설정
  res.setHeader("Content-Type", "text/plain"); //응답 헤더 중 Content-Type 설정
  res.end("Hello World\n"); // 응답 데이터 전송
});

module.exports = server;

const app = require("./app");
const hostname = "127.0.0.1"; // 사용할 서버 호스트네임
const port = 5000; // 사용할 서버포트

const debug = require('./utils/debug')('bin');

// 서버를 요청 대기 상태로 만든다.
app.listen(port, hostname, () => {
  // 요청 대기가 완료되면 실행되는 콜백함수
  // 터미널에 로그를 기록한다.
  debug(`Server running at http://${hostname}:${port}/`);
});

const server = require("./server");
const hostname = "127.0.0.1"; // 사용할 서버 호스트네임
const port = 5000; // 사용할 서버포트

// 서버를 요청 대기 상태로 만든다.
server.listen(port, hostname, () => {
  // 요청 대기가 완료되면 실행되는 콜백함수
  // 터미널에 로그를 기록한다.
  console.log(`Server running at http://${hostname}:${port}/`);
});

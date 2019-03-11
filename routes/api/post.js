const posts = [
  { title: 'post 3', body: 'this is post 3' },
  { title: 'post 2', body: 'this is post 2' },
  { title: 'post 1', body: 'this is post 1' },
];

const index = () => (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(posts)); // 문자열로 보낼때는 자바스크립트 객체를 문자열로 변환해줘야함.
}

module.exports = {
  index
}
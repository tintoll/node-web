const posts = [
  { title: 'post 3', body: 'this is post 3' },
  { title: 'post 2', body: 'this is post 2' },
  { title: 'post 1', body: 'this is post 1' },
];

const index = () => (req, res, next) => {
  // 문자열을 숫자형으로 변환 req.query.limit * 1
  // || 2; 는 기본값 설정 
  const limit = req.query.limit * 1 || 2; 
  const page = req.query.page * 1 || 1;

  const begin = (page - 1) * limit;
  const end = begin + limit;

  res.status(200).json(posts.slice(begin,end));
}

const create = () => (req, res, next) => {
  debug(`create() ${req.body}`);
};

module.exports = {
  index,
  create
}
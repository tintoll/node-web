const posts = [
  { title: 'post 3', body: 'this is post 3' },
  { title: 'post 2', body: 'this is post 2' },
  { title: 'post 1', body: 'this is post 1' },
];

const index = () => (req, res, next) => {
  res.status(200).json(posts);
}

module.exports = {
  index
}
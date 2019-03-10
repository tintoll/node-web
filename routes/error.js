const error404 = () => (req, res, next) => {
  res.statusCode = 404;
  res.end('Not found');
};
const error = () => (req, res, next) => {
  res.statusCode = 500;
  res.end();
};


module.exports = {
  error404,
  error
}
const Response = (res) => {

  if(!res) throw Error('res is requires');

  res.status = res.status || ( code => { // 기존 객체에 안전하게 추가
    res.statusCode = code;
    return res; // 함수 체이닝을 위해서 
  });

  res.set = res.set || ((key, value) => {
    res.setHeader(key, value);
    return res;
  });

  res.send = res.send || (text => {
    if(!res.getHeader('Content-Type')) {
      res.setHeader('Content-Type', 'text/plain');
    }
    res.end(text);
  });

  res.json = res.json || (data => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  });

  return res;

}

module.exports = Response;
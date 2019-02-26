const should = require('should');
const sinon = require('sinon');

const App = require('./Application');

// 모카는 테스트 코드를 실행해주는 테스트 러너입니다. 
// descirbe(): 테스트 꾸러미(Test Suite)라고 하며 테스트 환경을 기술함
// it(): 테스트 케이스(Test Case)라고 하며 단위 테스트를 정의함
describe('Application', () => {
  describe('listen()', () => {
    it('server 객체의 listen 함수를 실행한다.', () => {
      // arrange(준비)
      const app = App();
      const spy = sinon.spy();
      // 스파이를 심은 이유는 검증할때 listen 함수가 호출되었지는 스파이로 확인하기 위해서 
      app._server.listen = spy;

      // act(실행)
      app.listen();

      // assert(검증)
      should(spy.called).be.equal(true);
    });
  });
});
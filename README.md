# node-web

## 1강

- url : http://blog.jeonghwan.net/series/2018/12/01/node-web-1_orientation.html

## 2강

- url : http://blog.jeonghwan.net/series/2018/12/02/node-web-2_http.html

### curl 명령어

-v 옵션은 요청정보와 응답정보를 확인할수 있다. > : 요청정보 , < : 응답정보

```
 curl localhost:5000 -v
```

## 4강
- url : http://blog.jeonghwan.net/series/2018/12/04/node-web-4_application.html
- http를 직접 사용하지 않고 Application 객체로 추상화 하였음. 
### mocha
- mocha는 테스트 코드를 실행해주는 테스트 러너입니다. 
- descirbe(): 테스트 꾸러미(Test Suite)라고 하며 테스트 환경을 기술함
- it(): 테스트 케이스(Test Case)라고 하며 단위 테스트를 정의함

## 5강 
- mocha의 beforeEach() 함수는 테스트 케이스(it) 실행 전마다 동작합니다.
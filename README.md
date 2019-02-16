# Nomflix

Learning React and ES6 by building a Movie Discovery App.

# Setting

- ESLint & Prettier
  https://velog.io/@velopert/eslint-and-prettier-in-react  
  &  
  "linebreak-style": 0

## Screens (Routes)

- [ ] Home
- [ ] TV Shows
- [ ] Search
- [ ] Detail

# 2.2

## HashRouter & BrowserRouter

- 두 라우터 간의 차이점은 뭘까?

- BrowserRouter
  HTML history API 사용 (?)

- HashRouter
  내 페이지의 hash를 사용함

## Composition & Switch

- Route 주소에서 겹치는 항목이 있을 때 동시에 실행시킴  
  ex) 회원가입 단계 페이지(회원가입 페이지에서 가지고 있어야 하는 공통 요소는 갖추면서 페이지 별 차이점만 별도로 렌더링)

- Switch  
  Route가 겹치더라도 상위 주소 하나만 실행되도록 함  
  ex) "/tv/popular"로 접속하더라도, "/tv"로 이동  
  "/tv"에 'exact' option을 넣으면 "/tv/popular"로 이동할 수 있음

## Redirect

- 입력한 URL이 상위 Route의 path에 걸리지 않았을 때, 모아서 to="path"로 보낸다.

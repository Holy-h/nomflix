# Nomflix

Learning React and ES6 by building a Movie Discovery App.

# Setting

- ESLint & Prettier  
  Link: https://velog.io/@velopert/eslint-and-prettier-in-react  
  &  
  "linebreak-style": 0

### Screens (Routes)

- [ ] Home
- [ ] TV Shows
- [ ] Search
- [ ] Detail

# Styles[3.0]

### React로 Style 작업하는 방법

1. style.css
   프로젝트가 커지게 되면, style.css에 각 페이지 혹은 요소 별로 작업한 css파일을 import해서 index.js에는 styles.css만 import하도록 하면 됨  
   ex) import "page/home.css"

   - 문제점: 컴포넌트(js)와 CSS(css)파일이 분리되어 있음  
     컴포넌트를 이용하는 것의 핵심은 어플리케이션을 패키지화하는 것  
     즉, 같은 곳에 js, style, html을 모아두는 것임

2. 폴더 별로 패키징  
   ex) Header 폴더에 index.js & Header.js & Header.css

   - 문제점: 폴더를 매번 만들어서 정리해야 함  
     import를 해줘야 함  
     className을 기억해줘야 함(css가 프로젝트 내에서 global하게 다뤄지기 때문에 다른 것과 중복될 수 있음)

#### 해결책 1. CSS Module

- 취지: global css > local css (중복되는 문제 해결)

- 사용법

  1. css파일의 이름을 [Header.module.css]로 변경한다.
  2. Header.js  
     import Styles from "./Header.module.css"
  3. 적용 시킬 태그  
     className = {styles.navList}

- 문제점

  1. className을 기억해야 함(js, css 분리)
  2. "-"를 className으로 사용할 수 없음

#### 해결책 2. styled-components

- 취지: js 내부에 style하도록 함

- 사용법

  1.  npm install styled-components
  2.  Header.js  
      import styled from "styled-components"
  3.  html 태그에 styled를 입혀 새로운 태그로 만든다. (이게 핵심)
  4.  기본 html 태그 대신 styled 태그를 사용한다.

- 기타  
   a tag 대신에 react-router-dom에 있는 Link를 사용하면, 페이지 내부에서 이동할 때 새로고침 없이 이동이 가능함

# Project Setup[2.0]

### HashRouter & BrowserRouter

- 두 라우터 간의 차이점은 뭘까?

- BrowserRouter
  HTML history API 사용 (?)

- HashRouter
  내 페이지의 hash를 사용함

### Composition & Switch

- Route 주소에서 겹치는 항목이 있을 때 동시에 실행시킴  
  ex) 회원가입 단계 페이지(회원가입 페이지에서 가지고 있어야 하는 공통 요소는 갖추면서 페이지 별 차이점만 별도로 렌더링)

- Switch  
  Route가 겹치더라도 상위 주소 하나만 실행되도록 함  
  ex) "/tv/popular"로 접속하더라도, "/tv"로 이동  
  "/tv"에 'exact' option을 넣으면 "/tv/popular"로 이동할 수 있음

### Redirect

- 입력한 URL이 상위 Route의 path에 걸리지 않았을 때, 모아서 to="path"로 보낸다.

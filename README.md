# Nomflix

Learning React and ES6 by building a Movie Discovery App.

# Code Challenges

- [ ] IMDB Link 넘어가기
- [ ] Tab 구성 (Youtube 영상, 기타 정보)
- [ ] Movie Collections
- [ ] TV Show Seasons

# Setting

- ESLint & Prettier  
  Link: https://velog.io/@velopert/eslint-and-prettier-in-react  
  &  
  "linebreak-style": 0

## Screens (Routes)

- [x] Home
- [x] TV Shows
- [x] Search
- [x] Detail

## API Verbas

- [x] Now Playing (Movies)
- [x] Upcoming (Movies)
- [x] Top Rated (Movies & TV)
- [x] Popular (Movies & TV)

  > Query String  
  > api_key(req)  
  > language(option)

- [x] Airing Today (TV)

  > Query String  
  > api_key(req)  
  > language(option)

- [x] Details (Movies & TV)

  > Path Params  
  > id(req)  
  > Qurey String  
  > api_key(req)  
  > language & append_to_response(option)

- [x] Search (Movies & TV)

  > Query String  
  > api_key & query(req)  
  > language (option)

# Containers[5.0]

### 컨셉

- Router별 Api를 불러와서(Container) 화면을 구성(Presenter)하는 부분을 분리한다.

- 컨셉 자체는 Wetube때랑 비슷한듯 (Container & View)

### Router & Route

Router가 Route에게 기본적인 정보를 props로 전달함

> \<Router>  
> \<>  
> \<Header />  
> \<Switch>  
> \<Route path="/" exact component={Home} />  
> \<Route path="/tv" component={TV} />  
> \<Route path="/search" component={Search} />  
> \<Route path="/movie/:id" component={Detail} />  
> \<Route path="/show/:id" component={Detail} />  
> \<Redirect from="\*" to="/" />  
> \</Switch>  
> \</>  
> \</Router>

### DetailContainer

- ':[params_name]'

> \<Route path="/movie/:id" component={Detail} />

# Networking[4.0]

### Movie API Source

- https://www.themoviedb.org/  
  API key3 발급

- API로 부터 가져올 수 있는 것

- API를 통해 가져올 것(내가 필요한 것)

### Axios

- Axios의 instance를 설정함 (기본값, 중복을 방지할 수 있음)  
   https://www.npmjs.com/package/axios#axioscreateconfig

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

### Styled-reset (css 초기화)

### Styled-components

1. style에 props를 가지고 조건문을 수행할 수 있음

### WithRouter

- withRouter로 감싸면 props를 사용할 수 있음

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

### Route

- react

  > \</Route path="/show/:id" component={Detail}\>

- js

  > videoRouter.get(routes.videoDetail(), videoDetail);

### Redirect

- 입력한 URL이 상위 Route의 path에 걸리지 않았을 때, 모아서 to="path"로 보낸다.

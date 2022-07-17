# React
react공부
---

Library - facebook

[Command]
- react app 실행 : npm run start
↠ start는 변동될 수 있음 (package.json의 script에 start key가 변할 시 command 또한 변할 수 있음)


- Component로 이루어짐 (재사용성 뛰어남)
- VDOM?
 Real DOM을 Copy한 거라 생각하면 됨 (같은 properties를 가짐)

- Real DOM
    여러 HTML태그 중 하나에서 변동이 일어난다면, 모두 다시 load 함
- VDOM
    여러 HTML태그 중 하나에서 변동이 일어난다면, 변동 된 부분만 load 함
    [ process ]
    1. JSX을 렌더링 -> VDOM Update됨
    2. VDOM이 이전 VDOM에서 찍어둔 snapshot과 비교해 바뀐 부분을 찾음 (이 과정을 'diffing'이라 함)
    3. 바뀐 부분만 Real DOM에서 변경함

- Babel
    최신 JS 문법을 지원하지 않는 브라우저를 위해 최신 JS 문법을 구형 브라우저에서 사용할 수 있게 변환해줌    
- Webpack
    Web 페이지를 만들 때 사용되는 요소 (HTML, CSS, JS + Libraries)를 webpack을 이용해 bundle로 변환해줌
    많은 모듈을 간단하게 만들어 줌
    src만 관리함

[ React APP 설치]
- (Command) npx create-react-app
- npx create-react-app . : 해당 directory에 react app 설치

- NPM vs. NPX
- NPM (Node Package Manager)
    [ role ]
     1. library(dependency)를 담고있는 repo → (package.json)
     2. Application build

    [ install ]
     1. local (PJT에 저장됨 (node_modules에 다운받아짐))
     2. global (PJT 뿐만 아니라 컴퓨터 내부(머신)에 다운받음)
    (기존)
    npm install -g create-react-app → .global 디렉토리에 다운받음
    (현재)
    npx create-reac-app
    → npx가 npm registry에서 create-react-app을 찾아 다운 없이 실행시켜줌
    → Disk Space 낭비 방지
    → 항상 최신 버전 사용 가능

- NPX

[ 구조 ] https://create-react-app.dev/docs/folder-structure/

README.md
  node_modules/
  package.json

  public/ → index.html만 사용됨
    index.html
    favicon.ico

  src/ → js, css을 넣으면 됨
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg

- index.js → 'root' 찾음
- public.index.html → <div id='root'></div>

[구조 변경]
 _actions, _reducers : Redux를 위한 폴더
 components/views : Page 저장용
 components/views/Sections : 페이지와 관련된 css, components
 hoc, utils : Higher Order Component → 공통 모듈 저장용

 App.js : Routing 관련 작업
 Conmfig.js : 환경 변수 설정

[ Extension ]
 ES7+ React/Redux/React-Native snippets 다운 후 rfce


[ Route ] https://v5.reactrouter.com/web/example/basic
 - 페이지 이동 시 React Router Dom을 사용
 - dependency 다운로드 → npm install react-router-dom --save
 (ERROR)
 - 리액트 시작
    - react-scripts start => 에러 발생 (react-scripts : 'react-scripts' 용어가 cmdlet, 함수, 스크립트 파일 또는 실행할 수 있는 프로그램 이름으로 인식되지 않습니다. 이름이 정확한지 확인하고 경로가 포함된 경우 경로가 올바 
른지 검증한 다음 다시 시도하십시오.)
 (해결)
 - npm install -g react-scripts



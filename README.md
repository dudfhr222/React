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

=============================================== [ Hook ] ===============================================
- 함수 컴포넌트 === 함수
- 함수 컴포넌트는 상태 변화시 리렌더링됨
- 렌더링 시 함수 컴포넌트 내부 변수는 초기화됨
    - 초기화 : 새로운 객체 생성 + 메모리 주소 재할당 → (객체 타입) 렌더링 전, 후의 변수는 다름
    - 위 경우 'useEffect' 는 의존성 배열은 객체 구분을 하지 못하고, 리렌더링 됨
    - 해결) 'useMemo', 'useCallback' -> 객체(함수)를 Memoization해주어 값을 필요할 때마다 사용
- 함수 === 객체

=============================================== [ useEffect ] ===============================================
useEffect(()=>{})
(callback func : 다른 함수의 인자로 전달된 함수)

*
useEffect(()=>{

});
- 렌더링 될때 마다 실행

*
useEffect(()=>{

},[]);
- 화면에 첫 렌더링 될때 실행

*
useEffect(()=>{

},[value]);
- 화면에 첫 렌더링 될때 실행
- value가 변할 때 실행

*
useEffect(()=>{

    return () => {
        // 언마운트, 다음 렌더링 시 useEffect 실행 전
    }
},[]);

=============================================== [ useRef ] ===============================================
const ref = useRef(value)
{current : value}
- useRef의 인자 value는 ref current에 저장됨
- ref.current

- Component가 계속 렌더링 돼도, 언마운트 전까진 값을 유지함
- ref 값은 변해도, state와 달리 렌더링이 되지 않음
    -> 렌더링 후 값 변화 확인 가능

- Usage
- 1)저장공간
cf)state
    - state 변화 -> 렌더링 -> (함수)컴포넌트 내부 변수들 초기화 (함수형 컴포넌트의 리렌더링 : 함수 재호출 / 원하지 않는 렌더링에 의해 장애 발생 가능)
- Ref 변화 -> No 렌더링 -> 변수들의 값이 유지됨
- State 변화 -> 렌더링 -> Ref의 값은 유지됨
- 자주 변하는 값 + 변화는 감지해야 하지만, 그 변화가 렌더링을 발생해선 안되는 경우 (app3)

- 2)DOM 요소에 접근
- focus()
    - 자동으로 focus 될 수 있도록 함
    -document.querySelector()
const ref = useRef(value)
<input ref={ref} />

=============================================== [ useContext ] ===============================================
(USAGE)
- data는 props를 통해 부모 태그에서 자식 태그로 전달됨 (prop drilling)
    - 전달하는 과정에서 데이터는 중간 과정을 거쳐야 하는 불필요한 작업이 필요함
- App에서 전역적으로 사용되는 데이터를 여러 component 끼리 전달하는 방법을 제시
- 사용자 정보, 테마, 언어
- conetxt 사용 시 컴포넌트 재사용하기 어려워 질 수 있음
    - prop drilling을 피하기 위해선 component composition을 선고려

export const ThemeContext = createContext(null);
- .Provider로 감싸고 value값을 전달하기 때문에 초기값이 필요 없음

export const ThemeContext = createContext('hello');
- .Provider로 감싸지 않음 + value가 없다면 초기값이 전달됨

=============================================== [ useReducer ] ===============================================
(USAGE)
- 여러개의 하위 값을 가진 복잡한 state를 다룰 때 사용
- Reducer / Dispatch / Action

- Reducer : State를 변경(update)함
- Dispatch : 변경 요구 / state 업데이트를 위한 요구
- Action : 요구 내용

Dispatch(Action) -> Reducer(State, Action)

=============================================== [ useMemo ] ===============================================
- Optimization (최적화)
- Memoization → 동일한 값을 리턴하는 함수를 메모리에 저장해, 필요 시 꺼내서 사용하는 방법 (자주 사용하는 값을 캐싱)
  - 메모리를 사용하므로 필요시에만 사용
  - 어떤 조건이 만족됐을 때만 변수들이 초기화 되도록 할 수 있음

*
const value = useMemo(()=>{
    return calculate();
},[item]);
- callback 함수 return '값'을 memoization
- callback : memoization '값' 계산해 리턴 => useMemo가 return하는 값
- 의존성 배열 : 배열내 요소의 값이 변할 때 callback 호출해 memoization 값을 변경한 뒤 다시 memoization
    - (비어있을 시) 컴포넌트 마운트시에만 계산

(기존)
렌더링 → Component 함수 호출 → 모든 내부 변수 초기화

*
function Component(){
    const value = calculate();
    return <div>{value}</div>;
}
function calculate(){
    return 10;
}

(useMemo)
렌더링 → Component 함수 호출, Memoization → 렌더링 → Component 함수 호출, Memoize된 값 재사용

*
function Component(){
    const value = useMemo(
    () => calculate(),[]
    );
    return <div>{value}</div>;
}
<Component />

[Data Type]
(Primitive)         (Object) 객체 타입
 - String            - Object
 - Number            - Array
 - Boolean             ...
 - Null
 - Undefined
 - BigInt
 - Symbol
=> 객체는 메모리에 저장되고, 변수는 그 메모리의 주소가 할당됨

=============================================== [ useCallback ] ===============================================
- callback 함수가 리렌더링 될 때마다 초기화 되는 것이 아니라, 메모리에 넣어두고 필요할 때마다 사용
- Memoization
    - 자주 사용되는 값을 메모리에 저장해두어 계산할 필요 없이 가져와 사용하는 방법

*
useCallback(()=>{
  return value;
},[item])
- callback '함수'를 memoization

* EX
const calculate = useCallback((num)=>{
    return num+1;
},[item]);
- calculate는 memoization된 함수를 가짐
- 의존성 배열이 변경되지 않는 이상 다시 초기화 되지 않음

=============================================== [useMemo, useCallback를 이용한 불필요한 렌더링 방지] ===============================================
React.memo (HOC, 고차 컴포넌트) -> 보통 컴포넌트를 받아 새로운(최적화된) 컴포넌트 반환
- Prop check
    - Prop에 변화가 있다면 렌더링
    - Prop에 변화가 없다면 렌더링 하지 않고 재사용

useMemo + useCallback
- 꼭 필요한 순간에만 렌더링 되도록 구현 -> 성능 향상!

(USAGE)
- React.memo는 오직 Prop Check에만 의존하는 최적화 방법
    - useState, useReducer, useContext를 사용한다면 Props 변화가 없더라고 리렌더링 됨
- 컴포넌트가 같은 Props로 자주 렌더링 될때
- 컴포넌트가 렌더링이 될때마다 복잡한 로직을 처리해야할때



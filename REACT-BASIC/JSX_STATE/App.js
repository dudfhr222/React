import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; //자료 저장 변수
  let [글제목,b] = useState('남자 코트 추천')    //자료 잠시 저장
  // let [a,b] = useState('남자 코트 추천')    //자료 잠시 저장
  //a : state에 저장한 데이터
  //b : state 변경을 도와주는 함수
  //state : 변수를 사용하지 않고 state를 사용하는 이유 -> 변수는 변경되더라고 [post]에 자동으로 반영이 안됨
  //state가 변경된다면 state 쓰던 html은 자동 렌더링 됨
  //=> state : 변동시 자동으로 html에 반영되게 만들고 싶으면 state 사용 (자주 변경될거 같은 부분)
  let [logo, setlogo] = useState('ReactBlog'); 

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red', fontSize : '16px'}}>블로그임</h4>
      </div>
      <div className="list">
        <h4>{logo}</h4>
        <p>2월 17일</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;

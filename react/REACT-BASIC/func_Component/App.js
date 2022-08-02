/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [logo, b] = useState(['남자코트 추천','강남 우동 맛집','파이썬독학']);
  let [like, likechange] = useState(0);
  //state 변경하는 법 => state 변경함수(새로운 state)
  

  function 함수(){
    console.log(1);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      {/* state 변경 함수 특징
          조건) 기존 state와 신규 state가 같은 경우 변경 안함
                array/object : 
      */}
        <button onClick={()=>{
        let copy = [...logo];
        // array/object -> ... : 괄호를 벗긴 다음 다시 괄호를 입힘
        copy[0]='여자코트 추천';
        b(copy);
        }}>글 수정</button>

      <div className='list'>
        <h4>{logo[0]} <span onClick={() => {likechange(like+1)}}>👍</span> {like} </h4> 
        {/* <h4>{logo[0]} <span onClick={()=> {console.log(1)}}>👍</span> {like} </h4>  */}
        {/* <h4>{logo[0]} <span onClick={함수}>👍</span> {like} </h4>  */}
        {/* onClick={함수명} */}
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{logo[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{logo[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {/*컴포넌트 만들기
        1. function 만들기, 대문자로 시작
        2. return() 안에 html
        3. <함수명/> 쓰기
      */}
      <Modal/>
      {/* 컴포넌트 사용 case
          1. 반복적인 html 축약
          2. 큰 페이지
          3. 자주 변경되는 것
      */}
      {/* 컴포넌트 단점
          1. state 사용 시 문제 발생
      */}
    </div>
  );
}
// const Modal = () => {
//   return (
//     <div></div>
//   )
// }
function Modal(){
  return (
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  )
  // 의미 없는 <div></div> 대신  <></> 사용 가능
}

export default App;

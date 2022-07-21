import React,{useState, useRef} from 'react';

const UseRef_app = () => {
    const [render, setRender] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;

    const increaseRef = () => {
        countRef.current = countRef.current +1;
        console.log('countRef : ',countRef);
    }

    const increaseVar = () => {
        countVar = countVar +1;
        console.log('countVar : ',countVar);
    }

    const doRendering = () => {
        setRender(render+1);
    }

    const printResult = () =>{
        console.log(`ref : ${countRef.current}, var: ${countVar}`);
    }

    return (
        <div>
            <p>Ref : {countRef.current}</p>
            <p>Var : {countVar.current}</p>
            <button onClick={doRendering}>렌더!</button>
            <button onClick={increaseRef}>State ↑</button>
            <button onClick={increaseVar}>Var ↑</button>
            <button onClick={printResult}>Ref, Var 출력</button>
        </div>
    );
};

export default UseRef_app;

// 리렌더링 시 Ref는 그 값을 유지하지만, 변수는 초기화됨
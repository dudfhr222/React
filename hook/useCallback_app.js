import React, {useEffect, useState, useCallback} from 'react';

const UseCallback_app = () => {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);

    const someFunction = useCallback(
        () =>{
            console.log(`someFunc : number : ${number}`);
            return;
        },[number]);
    //의존성 배열이 비어있다면 number는 memoization됐을 당시의 값만 가짐


    useEffect(()=>{
        console.log('someFunction이 변경되었습니다.');
    },[someFunction]);

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e)=>setNumber(e.target.value)}
            />
            <button onClick={()=>setToggle(!toggle)}>{toggle.toString()}</button>
            <br />
            <button onClick={someFunction}>Call someFunc</button>
        </div>
    );
};

export default UseCallback_app;
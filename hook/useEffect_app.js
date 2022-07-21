import React, {useEffect, useState} from "react";

function App(){
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () =>{
        setCount(count+1);
    };
    const handleInputChange = (e) =>{
        setName(e.target.value);
    }

    useEffect(()=>{
        console.log('렌더링');
    }); // 렌더링마다 매번 실행됨
    useEffect(()=>{
        console.log('마운팅');
    },[]); // 렌더링마다 매번 실행됨

    useEffect(()=>{
        console.log('COUNT 렌더링');
    },[count]); // 초기 렌더링 + count가 변할 때 렌더링 됨

    useEffect(()=>{
        console.log('NAME 렌더링');
    },[name]); // 초기 렌더링 + name이 변할 때 렌더링 됨


    return(
        <div>
            <button onClick={handleCountUpdate}>Update</button><br></br>
            <span>count : {count}</span><br></br>
            <input type="text" value={name} onChange={handleInputChange}/><br></br>
            <span>name : {name}</span><br></br>
        </div>
    );
}

export default App;

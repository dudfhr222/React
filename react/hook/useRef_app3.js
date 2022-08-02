import React, {useState, useRef, useEffect} from 'react';

const UseRef_app = () => {
    const [count, setCount] = useState(1);
    const renderCount = useRef(1);

    useEffect(()=>{
       renderCount.current = renderCount.current+1;
       console.log('렌더링 수 : ',renderCount.current);

    });

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => {setCount(count+1)}}>↑</button>
        </div>
    );
};

export default UseRef_app;

// 리렌더링 시 Ref는 그 값을 유지하지만, 변수는 초기화됨
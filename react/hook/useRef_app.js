import React,{useState, useRef} from 'react';

const UseRef_app = () => {
    const [count, setCount] = useState(1);
    const countRef = useRef(0);

    console.log(countRef);
    console.log('렌더링');

    const increaseCountState = () =>{
        setCount(count+1);
    };

    return (
        <div>
            <p>State : {count}</p>
            <button onClick={increaseCountState}>State ↑</button>
        </div>
    );
};

export default UseRef_app;
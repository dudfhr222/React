import React, {useCallback, useMemo, useState} from 'react';
import Child from './Child';

const ReactMemoApp = () => {
    const [parentAge, setParentAge] = useState(0);
    // const [childAge, setChildAge] = useState(0);

    const incrementParentAge = useCallback(
        () => {
                setParentAge(parentAge +1)
        },[]);

    // const incrementChildAge = () => {
    //     setChildAge(childAge +1);
    // };
    const name = useMemo(()=>{
        return {
            lastName : '홍',
            firstName : '길동',
        };
    },[]);

    console.log('부모 컴포넌트 렌더링됨');

    return (
        <div style={{border: '2px solid navy', padding: '10px'}}>
            <h1>부모</h1>
            <p>age : {parentAge}</p>
            <button onClick={incrementParentAge}>부모 나이 증가</button>
            {/*<button onClick={incrementChildAge}>자녀 나이 증가</button>*/}
            <Child name={name} />
            {/*<Child name={'홍길동'} age={childAge}/>*/}
        </div>
    );
};

export default ReactMemoApp;
import React, {memo} from 'react';

// props가 update되지 않았다면 렌더링 될 필요 없음

const Child = ({name}) => {
// const Child = ({name, age}) => {
    console.log('자녀 컴포넌트 렌더링됨');
    

    return (
        <div style={{border: '2px solid powderblue', padding: '10px'}}>
            <h3>자녀</h3>
            <p>성: {name.lastName}</p>
            <p>이름: {name.firstName}</p>
            {/*<p>name: {name}</p>*/}
            {/*<p>age: {age}살</p>*/}
        </div>
    );
};

export default memo(Child);
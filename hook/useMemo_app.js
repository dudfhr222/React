import React, {useMemo, useState} from 'react';

// 값이 변경될 때 리렌더링됨
/**
 * state가 변함 -> 해당 함수 component 리렌더링
 *  
 * */
const hardCalculate = (number) => {
    console.log('어려운 계산');
    for(let i=0;i<99999999;i++){}
    return number +10000;
};

const easyCalculate = (number) => {
    console.log('쉬운 계산');
    return number + 1;
}

const UseMemoApp = () => {
    const [hardNumber, sethardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    // const hardSum = hardCalculate(hardNumber);
    // hardNumber가 변경될 때만 해당 컴포넌트가 다시 호출됨
    const hardSum = useMemo(()=>{
        return hardCalculate(hardNumber);
    },[hardNumber]);

    const easySum = easyCalculate(easyNumber);

    return (
        <div>
            <h3>어려운 계산기</h3>
            <input
                type="number"
                value={hardNumber}
                onChange={(e)=>sethardNumber(parseInt(e.target.value))}
            />
            <span> + 10000 = {hardSum}</span>  
            <h3>쉬운 계산기</h3>
            <input
                type="number"
                value={easyNumber}
                onChange={(e)=>setEasyNumber(parseInt(e.target.value))}
            />
            <span> + 1 = {easySum}</span>
        </div>
    );
};

export default UseMemoApp;
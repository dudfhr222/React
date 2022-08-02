import React, {useEffect, useMemo, useState} from 'react';

/**
 * [STATE]
 * Number
 * Location
**/

const UseMemoApp2 = () => {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    const location = useMemo(()=>{
        return {
            country : isKorea ? '한국' : '외국',
        };
    },[isKorea]);
    /**
     * 원시 타입과 객체 타입의 차이?
     * */
    // [변수]
    // const location = isKorea ? '한국' : '외국';
    // [객체]
    // number가 변하면 해당 함수는 다시 호출되어 내부의 변수들이 초기화됨
    // 아래 location은 객체 타입으로, 함수 리렌더링 시 데이터가 새로운 메모리에 할당됨 (기존과 변경이 생김)
    // useEffect 입장에서 location의 주소가 변경되었다 인식해 해당 hook이 동작하게됨
   // const location = {
   //      country : isKorea ? '한국' : '외국'
   //  }

    // 맨 처음 렌더링 될 때 + location이 변경될 때
    useEffect(()=>{
        console.log('useEffect 호출');
        // 뭔가 오래걸리는 작업
    },[location]);

    return (
        <div>
            <h2>하루에 몇끼 먹어요?</h2>
            <input
                type="number"
                value={number}
                onChange={(e)=>{setNumber(e.target.value)}}
            />
            <hr />
            <h2>어느 나라?</h2>
            <p>나라 : {location.country}</p>
            <button onClick={()=>{setIsKorea(!isKorea)}}>ㄱㄱ</button>
            {/*Toggle*/}
        </div>
    );
};

export default UseMemoApp2;
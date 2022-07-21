import React,{useState} from 'react';
import './context.css';
import {ThemeContext} from "./ThemeContext";
import {UserContext} from "./UserContext";

import Page from '../component/Page';

const UseContext = () => {
    const [isDark, setIsDark] = useState(false);
    return (
        <UserContext.Provider value={'사용자'}>
            <ThemeContext.Provder value={{isDark, setIsDark}}>
                <Page isDark={isDark} setIsDart={setIsDark}/>
                {/* 기존 : <Page isDark={isDark} setIsDart={setIsDark}/>*/}
            </ThemeContext.Provder>
        </UserContext.Provider>
    );
};

export default UseContext;
//Provider -> value : 전달하고자 하는 value
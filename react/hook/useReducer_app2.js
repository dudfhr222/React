import React, {useState, useReducer} from 'react';
import Student from "./Student";

const reducer = (state, action) => {
    switch(action.type){
        case 'add-student' :
            const name = action.payload.name;
            const newStudent = {
                id : Date.now(),
                // name : name === name -> key, value 같을 시 하나 생략 가능
                name,
                isHere : false,
            }
            return {
                count : state.count +1,
                students :[...state.students, newStudent],
            };
        case 'delete-state':
            return{
                count : state.count -1,
                students: state.students.filter(student => student.id != action.payload.id);
            };
        case 'mark-student':
            return{
                count : state.count,
                students: state.students.map(student => {
                    if(student.id === action.payload.id){
                        return {...studnet, isHere: !student.isHere} //student 이전 배열은 같고, isHere만 수정
                    }
                    return student;
                })
            };
        default:
            return state;
    }
};

const initialState = {
    count : 0,
    students : [
        // {
        //     id : Date.now(),
        //     name : 'James',
        //     isHere : false,
        // }
    ],
}

const UseReducerApp2 = () => {
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수 : {studentsInfo.count}</p>
            <input
                type="text"
                placeholder="이름을 입력해주세요"
                value={name}
                onChange = {(e)=>{setName(e.target.value)}}
            />
            <button
                onClick={()=>{
                    dispatch({type: 'add-student', payload:{name}})
                }}
            >추가</button>
            {studentsInfo.students.map((student) => {
                return (
                    <Student
                        key = {student.id}
                        name={student.name}
                        dispatch = {dispatch}
                        id={student.id}
                        isHere = {student.isHere}
                    />
                );
            })}
        </div>
    );
};

export default UseReducerApp2;
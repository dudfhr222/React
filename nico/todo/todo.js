import {useState} from "react";

function App() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const onChange = (e) => setTodo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if(todo === "") return;
        setTodo("");
        setTodos(currentArr => [todo, ...currentArr]);
    }

    console.log(todo)
    console.log(todos)

    return (
        <div>
            <h1>My To Dos({todos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={todo} type={"text"} placeholder={"Write Your Todo"} />
                <button>Add ToDo</button>
            </form>
            <hr />
            {todos.map((item, idx) => (<li key={idx}>{item}</li>))}
        </div>
    );
}

export default App;

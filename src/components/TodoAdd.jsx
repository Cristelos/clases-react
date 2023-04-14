import { useState } from 'react';

export default function TodoAdd() {

    const todoList = [{name: "Aprender React", isDone: false}, {name:"Sacar al gato", isDone: false}, {name: "Ver la peli de Super Mario", isDone:true}]


    const [todo, setTodo] = useState(todoList);
    const[newTask, setNewTask] = useState("");

    const handelInputChange = (e) => {
      setNewTask(e.target.value)
    }

    const addNew = () => {
        const copyTodo = [...todo];
        copyTodo.push({ name: newTask, isDone: false })
        setTodo(copyTodo)
    }
    return (
       <div>
      <ul>
        {todo.map((list,index) => <li key={index}>{list.name}</li>)}
      </ul>
      <input type="text" name="tarea" value={newTask} onChange={handelInputChange}/>
      <button onClick={addNew}>Añadir nuevo elemento</button>
      </div>
    );
  }
  
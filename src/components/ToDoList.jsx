export default function ToDoList() {
    const todoList = [{name: "Aprender React", isDone: false}, {name:"Sacar al gato", isDone: false}, {name: "Ver la peli de Super Mario", isDone:true}]
    return (
      <ul>
        {todoList.map((list,index) => <li key={index}>{list.name}</li>)}
      </ul>
    );
  }
  
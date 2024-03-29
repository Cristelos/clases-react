
import './App.css';
import Card from './components/Card';
import Boton from './components/Boton';
import HelloWorld from './components/HelloWorld';
import ToDoList from './components/ToDoList';
import TodoAdd from './components/TodoAdd';
import Form from './components/Form';
import AnimeFetch from './components/AnimeFetch';
import Anime from './components/Anime';

// import QueryForm from './components/QueryForm';

function App() {
  const msg = {
    title: "El mejor anime del mundo",
    img: "https://www.formulatv.com/images/series/posters/2100/2183/dest_1.jpg",
    description: "La ostia con cebolla, mejor fucking final ever!!!",
  };
  return (
    <div className="App">
      <header className="App-header">
      <HelloWorld/>
       <Boton/>
       <Card data={msg}></Card>
       <ToDoList></ToDoList>

       <h1>TODO NEW</h1>
       <TodoAdd></TodoAdd>

       <h1>Formulario</h1>
       <Form></Form>

       <h1>Anime Fetch</h1>
       <AnimeFetch/>

       <h1>Animes</h1>
      <Anime></Anime>
      
       <br/>
      </header>
    </div>
  );
}

export default App;

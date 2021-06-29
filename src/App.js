import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'
import {bd} from './firebase-config';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);


  const traerDesdeFirebase = () =>{
    bd.collection("todos").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id:doc.id})
      });
      setTodos(docs);
  });
  }

  useEffect(traerDesdeFirebase, [])


  useEffect(() => {
    const filteredHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(tarea => tarea.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(tarea => tarea.completed === false))
          break;
        default:
          setFilteredTodos(todos);

      }
    }

    //Local storage
    // const saveLocalTodos = () => {
    //   localStorage.setItem('todos', JSON.stringify(todos))
    // }

    filteredHandler();
    // saveLocalTodos();
  }, [status, todos])


  return (
    <div>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;

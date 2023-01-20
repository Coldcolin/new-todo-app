import Card  from './Card.jsx';
import React, {useRef, useReducer, useEffect} from "react";
import "./App.css";
import Swal from 'sweetalert2';

const initialState=[];

const reducer=(todo, actions)=>{
  switch(actions.type){
    case("create"):
      return [...todo, { id: actions.payload.id + 1, title: actions.payload.title, checked: false}]
    case("toggle"):
      return todo.map((i)=> i.id === actions.payload.id? {...i, checked: !i.checked}: {...i})
    case("delete"):
      return todo.filter((i)=> i.id !== actions.payload.id)
    default:
      return todo
  }
}


function App() {
  const [todo, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todo')) || [])
  const inputRef = useRef('')

  const addTodo=()=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'New todo added successfully',
      showConfirmButton: false,
      timer: 2000
    })
    dispatch({type: "create", payload:{id: todo.length ,title: inputRef.current.value}});
  }
  // useEffect(()=>{
  //   localStorage.setItem('todo', JSON.stringify([]));
  // }, [])
  useEffect(() => {
    inputRef.current.value = "";
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo])
  
  

  return (
    <div className="App">
      <div className="app-wrap2">
        <div className="todo">
          <div className="input-holder">
            <input ref={inputRef} className="place" placeholder="Add new todo.." />
            <button onClick={addTodo} className="add">+</button>
          </div>
        </div>
        <Card todo={todo} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;

  
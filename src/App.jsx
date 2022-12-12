import Card  from './Card.jsx';
import React, {useRef, useState, useReducer, useEffect} from "react";
import "./App.css";

const initialState=[];

const reducer=(todo, actions)=>{
  switch(actions.type){
    case("create"):
      return [...todo, { id: actions.payload.id + 1, title: actions.payload.title, checked: false}]
    case("toggle"):
      return todo.map((i)=> i.id === actions.payload.id? {...i, checked: !i.checked}: {...i})
    default:
      return todo
  }
}


function App() {
  const [val, setVal] = useState("")
  const [todo, dispatch] = useReducer(reducer, initialState)
  const inputRef = useRef('')

  const handleChange=()=>{
    setVal(inputRef.current.value)
  }

  const addTodo=()=>{
    dispatch({type: "create", payload:{id: todo.length ,title: val}})
  }
  // useEffect(() => {
  //   console.log(todo)
  // }, [todo])
  

  return (
    <div className="App">
      <div className="app-wrap2">
        <div className="todo">
          <div className="input-holder">
            <input ref={inputRef} className="place" placeholder="Add new todo.." onChange={handleChange}/>
            <button onClick={addTodo} className="add">+</button>
          </div>
        </div>
        <Card todo={todo} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;

  
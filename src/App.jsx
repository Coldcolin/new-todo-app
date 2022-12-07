import Card  from './Card.jsx';
import React, {useRef, useState} from "react";
import "./App.css";
// import Card from './Card.jsx'
function App() {
  const [val, setVal] = useState("")
  const inputRef = useRef('')

  const handleChange=()=>{
    setVal(inputRef.current.value)
  }


  return (
    <div className="App">
      <div className="app-wrap2">
        <div className="todo">
          <div className="input-holder">
            <input ref={inputRef} className="place" placeholder="Add new todo.." />
            <button onClick={handleChange} className="add">+</button>
          </div>
        </div>
        <Card input={val}    />
      </div>
    </div>
  );
}

export default App;

  
import React, {useEffect, useState} from "react";

export default function Card({todo, dispatch}) {
  const [count, setCounter] = useState([]);

  const completeCheck=()=>{
    const complete = todo?.filter((i)=> i.checked === true );
    setCounter(complete)
  }

  useEffect(()=>{
    completeCheck()
  },[todo])

  return (
      <div className="card_holder">
        <div className="top">
          <h1>Todo's</h1>
          <p>{todo.length} Total {count.length} complete and {todo.length - count.length} pending</p>
        </div>
        <div className="card">
          <div className="heading">
            <p>#</p>
            <h3>Todo Title</h3>
            <h3>Status</h3>
          </div>
          <div className="task-holder">
            {
              todo?.map((item)=>(
                <div key={item.id} className="tasks1" style={{backgroundColor: item.checked? "#98e975": "#fff"}}>
                  <input type="checkbox" onChange={()=>{dispatch({type: "toggle", payload:{id: item.id}})}}/>
                  <p className="todo-text">{item.title}</p>
                  {<p>{item.checked? "completed": "pending"}</p>}
                  <div className="delete" onClick={()=> dispatch({type: "delete", payload: {id: item.id}})}></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
  )
}
  
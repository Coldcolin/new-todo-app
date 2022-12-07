
import React, {useRef} from "react";
export default function Card({input}) {



  return <div className="card_holder">
          <div className="top">
            <h1>Todo's</h1>
            <p>3 Total 2 complete and 1 pending</p>
          </div>
          <div className="card">
            <div className="heading">
              <p>#</p>
              <h3>Todo Title</h3>
              <h3>Status</h3>
            </div>
            <div className="tasks">
              <input type="checkbox" />
              <p>Todo Title</p>
              <p>Status</p>
            </div>
            <div className="tasks1">
              <input type="checkbox" />
              <p>{input}</p>
              <p>Status</p>
            </div>
          </div>
        </div>;
}
  
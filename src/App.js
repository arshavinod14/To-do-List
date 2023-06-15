import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setTodos] = useState([]); //array of todos
  const [toDo, setTodo] = useState(""); //single todo

  const handleDelete = (id) => {
    setTodos(toDos.filter((obj) => obj.id !== id));
  };
  

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
  
      <div className="input">
        <input
          value={toDo}
          onChange={(event) => setTodo(event.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            if (toDo.trim() !== "") {
              setTodos([
                ...toDos,
                { id: Date.now(), text: toDo, status: false },
              ]);
              setTodo(""); // Clear the input text
            }
          }}
          className="fas fa-plus"
        ></i>
      </div>
  
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  onChange={(event) => {
                    setTodos(
                      toDos.map((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = event.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  checked={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p className={obj.status ? "completed" : ""}>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  className="fas fa-times"
                  onClick={() => handleDelete(obj.id)}
                ></i>
              </div>
            </div>
          );
        })}
        <br />
      
      </div>
      <br />
      <div className="completedTasks">
        <h2>Completed Tasks:</h2>
        {toDos.map((obj) => {
          if (obj.status) {
            return (
              <div key={obj.id} className="completedTask">
                <input type="checkbox" checked={true} readOnly />
                <p>{obj.text}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
  
}

export default App;

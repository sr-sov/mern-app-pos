import { useEffect, useState } from "react";
import ToDoCard from "./components/ToDoCard";
import "./index.css";
import { getAllToDo } from "./utils/HandleApi";

function App() {

  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    getAllToDo(setToDos)
  })

  return (
    <div className="App">

      <div className="container">
        <h1> To Do List</h1>

        <div className="top">
          <input 
          type="text" 
          placeholder="New task..."/>
          <div className="buttonContainer">
            <label>Add</label>
          </div>
          <div className="List">
            {toDos.map((toDo) => {
            <ToDoCard key={toDo._id} text={toDo.text} />
            })}
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;

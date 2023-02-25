import { useEffect, useState } from "react";
import ToDoCard from "./components/ToDoCard";
import "./index.css";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";

function App() {

  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getAllToDo(setToDos)
  }, [])

  return (
    <div className="App">

      <div className="container">
        <h1> To Do List</h1>

        <div className="top">
          <input 
          type="text" 
          placeholder="New task..."
          value={text}
          onChange={(e) =>setText(e.target.value)}
          />
          <div className="buttonContainer" onClick={() => addToDo(text, setText, setToDos)}>
            <label>Add</label>
          </div>
        </div>
        
        <div className="List">
          {toDos.map((toDo) => 
          <ToDoCard 
          key={toDo._id} 
          text={toDo.text} 
          updateMode={updateToDo}
          deleteToDo={deleteToDo}
          />
          )}
        </div>


      </div>

    </div>
  );
}

export default App;

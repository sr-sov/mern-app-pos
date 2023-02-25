import { useEffect, useState } from "react";
import ToDoCard from "./components/ToDoCard";
import "./index.css";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";

function App() {

  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDos)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

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
          <div className="buttonContainer" onClick={isUpdating ? 
            () => updateToDo(toDoId, text, setToDos, setText, setIsUpdating) 
            : () => addToDo(text, setText, setToDos)}>
            {isUpdating ? "Update" : "Add"}
            
          </div>
        </div>
        
        <div className="List">
          {toDos.map((toDo) => 
          <ToDoCard 
          key={toDo._id} 
          text={toDo.text} 
          updateMode = {() => updateMode(toDo._id, toDo.text)}
          deleteToDo = {() => deleteToDo(toDo._id, setToDos)}
          />
          )}
        </div>


      </div>

    </div>
  );
}

export default App;

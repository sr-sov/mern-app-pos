import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";
import "./index.css";
import { addItem, deleteItem, getAllItem, updateItem } from "./utils/HandleApi_Item";

function App() {

  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [ItemId, setItemId] = useState("")

  useEffect(() => {
    getAllItem(setItems)
  }, [])

  const updateMode = (_id, itemName, price, description) => {
    setIsUpdating(true)
    setItemName(itemName)
    setPrice(price)
    setDescription(description)
    setItemId(_id)
  }

  return (
    <div className="App">

      <div className="container">
        <h1>Item List</h1>

        <div className="top">
          <input 
          type="text" 
          placeholder="New item..."
          value={itemName}
          onChange={(e) =>setItemName(e.target.value)}
          />
          <input 
          type="number" 
          placeholder="$$"
          value={price}
          onChange={(e) =>setPrice(e.target.value)}
          />
        </div>

        <div className="top">
            <input 
            type="text" 
            placeholder="Description..."
            value={description}
            onChange={(e) =>setDescription(e.target.value)}
            />
            <div className="buttonContainer" onClick={isUpdating ? 
            () => updateItem(ItemId, itemName, price, description, setItemName, setPrice, setDescription, setItems, setIsUpdating) 
            : () => addItem(itemName, price, description, setItemName, setPrice, setDescription, setItems)}>
            {isUpdating ? "Update" : "Add"}
            
          </div>
        </div>
        
        <div className="List">
          {items.map((item) => 
          <ItemCard 
          key={item._id} 
          itemName={item.itemName} 
          price={item.price}
          description={item.description}
          updateMode = {() => updateMode(item._id, item.itemName, item.price, item.description)}
          deleteItem = {() => deleteItem(item._id, setItems)}
          />
          )}
        </div>


      </div>

    </div>
  );
}

export default App;

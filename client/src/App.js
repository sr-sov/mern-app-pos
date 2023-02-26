import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";
import "./index.css";
import { addItem, deleteItem, getAllItem, updateItem } from "./utils/HandleApi_Item";
import { Box, Container, TextField, Typography } from "@mui/material";

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
    <Container sx={{bgcolor: '', height: "100vh"}}>
        <Typography 
        variant="h1"
        sx={{
          my: 4, textAlign: "center", color: {xs:"primary.main", sm:"secondary.main"}
        }}
        >Item List</Typography>

        <Box sx={{
          m: 3,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 4
        }}>
          <TextField label="New Item" variant="outlined" sx={{
            width: '75%'
          }}>

          </TextField>

          <TextField label="Price" variant="outlined" sx={{
            width: '25%'
          }}>

          </TextField>
          
        </Box>

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


</Container>
  );
}

export default App;

import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";
import "./index.css";
import { addItem, deleteItem, getAllItem, updateItem } from "./utils/HandleApi_Item";
import { Box, Container, TextField, Typography, withTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

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

        <Box 
        display="grid"
        gridTemplateColumns="repeat(6, minmax(0, 1fr))"
        sx={{
          m: 3,
          gap: 4
        }}>
          <TextField 
          label="Item" 
          variant="outlined" 
          type="text"
          value={itemName}
          sx={{
            gridColumn: "span 4"
          }}>

          </TextField>

          <TextField 
          label="Price" 
          variant="outlined" 
          type="number" 
          value={price}
          sx={{
            gridColumn: "span 2"
          }}
          >

          </TextField>
          
          <TextField 
          label="Item description here..." 
          multiline 
          rows={3}
          type="text"
          variant="outlined"
          value={description}
          sx={{
            gridColumn: "span 6"
          }}
          >

          </TextField>
          

        </Box>

        <div className="top">
            <div className="buttonContainer" onClick={isUpdating ? 
            () => updateItem(ItemId, itemName, price, description, setItemName, setPrice, setDescription, setItems, setIsUpdating) 
            : () => addItem(itemName, price, description, setItemName, setPrice, setDescription, setItems)}>
            {isUpdating ? 
            <EditIcon />
            :
            <AddIcon />
            }
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

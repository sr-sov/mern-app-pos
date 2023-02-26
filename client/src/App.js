import { useEffect, useState } from "react";
import ItemCard from "./components/ItemCard";
import "./index.css";
import { addItem, deleteItem, getAllItem, updateItem } from "./utils/HandleApi_Item";
import { AppBar, Box, Button, Container, CssBaseline, TextField, Toolbar, Typography, withTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { ItemForm } from "./components/ItemForm";

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

  const handleItemNameChange = event => {
    setItemName(event.target.value);
  };
  const handlePriceChange = event => {
    setPrice(event.target.value);
  };
  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const updateMode = (_id, itemName, price, description) => {
    setIsUpdating(true)
    setItemName(itemName)
    setPrice(price)
    setDescription(description)
    setItemId(_id)
  }

  return (
    <>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <ListAltIcon />
        <Typography variant="h6">Inventory</Typography>
      </Toolbar>
    </AppBar>
    <Container  maxWidth="sm" sx = {{marginTop: "3rem"}}>
    <Typography 
        variant="h1"
        sx={{
          my: 4, 
          textAlign: "center", 
          color: "primary.main",
          fontSize: {xs:"2rem", sm:"3rem"}
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
          onChange={handleItemNameChange}
          sx={{
            gridColumn: "span 4"
          }}>

          </TextField>

          <TextField 
          label="Price" 
          variant="outlined" 
          type="number" 
          value={price}
          onChange={handlePriceChange}
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
          onChange={handleDescriptionChange}
          sx={{
            gridColumn: "span 6"
          }}
          >

          </TextField>
          

        </Box>

        <div className="top">
            <Button onClick={isUpdating ? 
            () => updateItem(ItemId, itemName, price, description, setItemName, setPrice, setDescription, setItems, setIsUpdating) 
            : () => addItem(itemName, price, description, setItemName, setPrice, setDescription, setItems)}>
            {isUpdating ? 
            <EditIcon />
            :
            <AddIcon />
            }
          </Button>
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
  </>
  );
}

export default App;

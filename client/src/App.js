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
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [ItemId, setItemId] = useState("");
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    getAllItem(setItems)
  }, [])

  const handleItemNameChange = event => {
    setItemName(event.target.value);
  };
  const handlePriceChange = event => {
    setPrice(event.target.value);
  };
  const handleStockChange = event => {
    setStock(event.target.value);
  };
  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const updateMode = (_id, itemName, price, stock, description) => {
    setIsUpdating(true)
    setItemName(itemName)
    setPrice(price)
    setStock(stock)
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

    <Container  maxWidth="sm" 
    sx = {{
      py: "1rem"
      }}>

    {isLogged ? 

      <>
      <ItemForm 
      itemName={itemName} price={price} stock={stock} description={description}handleItemNameChange={handleItemNameChange} handlePriceChange={handlePriceChange} handleStockChange={handleStockChange} handleDescriptionChange={handleDescriptionChange} 
      />

      <div className="top">
            <Button onClick={isUpdating ? 
            () => updateItem(ItemId, itemName, price, stock, description, setItemName, setPrice, setStock, setDescription, setItems, setIsUpdating) 
            : () => addItem(itemName, price, stock, description, setItemName, setPrice, setStock, setDescription, setItems)}>
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
          stock={item.stock}
          updateMode = {() => updateMode(item._id, item.itemName, item.price, item.stock, item.description)}
          deleteItem = {() => deleteItem(item._id, setItems)}
          />
          )}
        </div>
      </>  
      
      :
      
      <>
      <Typography variant="h1">Login</Typography>
      </>
      
      }


    </Container>
  </>
  );
}

export default App;

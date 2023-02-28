import { AppBar, Box, Container, CssBaseline, TextField, Toolbar, Typography, withTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { AiOutlineStock } from "react-icons/ai";

import { useForm } from "react-hook-form";
import { ItemFormText } from "./ItemFormText";

import { Controller } from "react-hook-form";

export const ItemForm = ({itemName, price, stock, description, handleItemNameChange, handlePriceChange, handleStockChange, handleDescriptionChange}) => {
    
  const insertItem = useForm();
  const { handleSubmit, reset, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
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
      <ItemFormText
        name={"textInput"}
        control={control}
        label={"Item Name"}
        itemName={itemName}
        handleItemNameChange={handleItemNameChange}
      />
      <Controller
        name={"textInput"}
        control={control}
        render={({
            field: {onChange, value},
            fieldState: { error },
            formState,
        }) => (
        <TextField 
        label={"Item Name"}
        variant="outlined" 
        type="text"
        value={itemName}
        onChange={handleItemNameChange}
        error
        helperText="some validation errors"
        sx={{
        gridColumn: "span 6"
        }}>
        </TextField>
        )}
      />
      
    </Box>
    </>
  )
}
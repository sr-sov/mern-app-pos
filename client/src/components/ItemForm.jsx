import { AppBar, Box, Button, Container, CssBaseline, TextField, Toolbar, Typography, withTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { AiOutlineStock } from "react-icons/ai";

import { useForm } from "react-hook-form";
import { ItemFormText } from "./ItemFormText";

import { Controller } from "react-hook-form";

export const ItemForm = ({itemName, price, stock, description, handleItemNameChange, handlePriceChange, handleStockChange, handleDescriptionChange, handleAddItem, handleUpdateItem, isUpdating}) => {
    
  const insertItem = useForm();
  const { register, reset, control, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log("HERE");
  
  
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
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
    justifyContent="center"
    sx={{
      m: 3,
      gap: 4
    }}>
      
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
        {...register('item',{
        required: "Required field"
        })}
        error={!!errors?.item}
        helperText={errors?.item ? errors.item.message : null
        }
        onChange={handleItemNameChange}
        sx={{
        gridColumn: "span 6"
        }}>
        </TextField>
        )}
      />
      
      <TextField 
      label="Price" 
      variant="outlined" 
      type="number" 
      {...register('price',{
        required: "Required field"
        })}
        error={!!errors?.item}
        helperText={errors?.item ? errors.item.message : null
      }
        onChange={handleItemNameChange}
      value={price}
      onChange={handlePriceChange}
      sx={{
        gridColumn: "span 3"
      }}
      >

      </TextField>

      <TextField 
      label="Stock" 
      variant="outlined" 
      type="number" 
      {...register('stock',{
        required: "Required field",
        })}
        error={!!errors?.item}
        helperText={errors?.item ? errors.item.message : null
      }
      value={stock}
      onChange={handleStockChange}
      sx={{
        gridColumn: "span 3"
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

      <Button 
      type="submit"
      onClick={isUpdating ? 
      () => handleUpdateItem() 
      : () => handleAddItem()}
      sx={{
        gridColumn: "span 6",
        bgcolor: "primary.main",
        color: "#FFF",
        '&:hover': {
          bgcolor: "primary.darkerText",
        }
      }}
      >
      {isUpdating ? 
      <EditIcon />
      :
      <AddIcon />
      }
      </Button>
      
    </Box>
    </form>
    </>
  )
}
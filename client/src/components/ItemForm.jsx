import { AppBar, Box, Container, CssBaseline, TextField, Toolbar, Typography, withTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ListAltIcon from '@mui/icons-material/ListAlt';

export const ItemForm = ({itemName, price, description, handleItemNameChange, handlePriceChange, handleDescriptionChange}) => {
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
        </>
    )
}
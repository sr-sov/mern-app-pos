import React from 'react'

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

const ItemCard = ({itemName, price, stock, description, updateMode, deleteItem}) => {
  return (
    <Card sx={{
      bgcolor: "#eef2f6",
      my: "1rem"
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/200/140"
        title="Image Title"
      />
      <CardContent>
        <Typography variant="h6">
        {itemName} (${price}) : ({stock}) items left!
        </Typography>
        <Typography variant="body2">
        {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="dark" onClick={updateMode}>Edit</Button>
        <Button size="small" color="dark" onClick={deleteItem}>Remove</Button>
      </CardActions>
    </Card>

  )
}

export default ItemCard
import React from 'react'

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

const ItemCard = ({itemName, price, description, updateMode, deleteItem}) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/200/300"
        title="Image Title"
      />
      <CardContent>
        <Typography variant="h6">
        {itemName} (${price})
        </Typography>
        <Typography variant="body2">
        {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={updateMode}>Edit</Button>
        <Button size="small" color="primary" onClick={deleteItem}>Remove</Button>
      </CardActions>
    </Card>

  )
}

export default ItemCard
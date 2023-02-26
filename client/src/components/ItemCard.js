import React from 'react'

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const ItemCard = ({itemName, price, description, updateMode, deleteItem}) => {
  return (
    <div className='toDoCard'>
        <div className='itemName'>{itemName} (${price}) : {description}</div>
        <div className='icons'>
          <BiEdit className='icon' onClick={updateMode} />
          <AiFillDelete className='icon' onClick={deleteItem} />
        </div>
    </div>
  )
}

export default ItemCard
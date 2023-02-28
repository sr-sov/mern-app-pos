import axios from "axios"

const baseURL = "https://bizky-service.onrender.com"

export const getAllItem = (setItem) => {
    axios
        .get(baseURL)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setItem(data)
        })
}

export const addItem = (itemName, price, stock, description, setItemName, setPrice, setStock, setDescription, setItems) => {

    axios
        .post(`${baseURL}/save`, { itemName: itemName, price: price, stock: stock, description: description })
        .then((data) => {
            console.log(data);
            //reset form
            setItemName("");
            setPrice("");
            setDescription("");
            setStock("");
            //update items state
            getAllItem(setItems)
        })
        .catch((err) => console.log(err))

}

export const updateItem = (ItemId, itemName, price, stock, description, setItemName, setPrice, setStock, setDescription, setItems, setIsUpdating) => {
    axios
        .post(`${baseURL}/update`, { _id: ItemId, itemName, price, stock, description })
        .then((data) => {
            setItemName("")
            setPrice("")
            setStock("")
            setDescription("")
            setIsUpdating(false)
            getAllItem(setItems)
        })
        .catch((err) => console.log(err))

}

export const deleteItem = (_id, setItems) => {

    axios
        .delete(`${baseURL}/delete`, { data:{_id} })
        .then((data) => {
            console.log(data)
            getAllItem(setItems)
        })
        .catch((err) => console.log(err))

}

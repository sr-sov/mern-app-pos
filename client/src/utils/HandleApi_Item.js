import axios from "axios"

const baseURL = "http://localhost:3001"

export const getAllItem = (setItem) => {
    axios
        .get(baseURL)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setItem(data)
        })
}

export const addItem = (itemName, price, description, setItemName, setPrice, setDescription, setItems) => {

    axios
        .post(`${baseURL}/save`, { itemName: itemName, price: price, description: description })
        .then((data) => {
            console.log(data);
            //reset form
            setItemName("");
            setPrice("");
            setDescription("");
            //update items state
            getAllItem(setItems)
        })
        .catch((err) => console.log(err))

}

export const updateItem = (ItemId, itemName, price, description, setItemName, setPrice, setDescription, setItems, setIsUpdating) => {

    axios
        .post(`${baseURL}/update`, { _id: ItemId, itemName, price, description })
        .then((data) => {
            setItemName("")
            setPrice("")
            setDescription("")
            setIsUpdating(false)
            getAllItem(setItems)
        })
        .catch((err) => console.log(err))

}

export const deleteItem = (_id, setItem) => {

    axios
        .delete(`${baseURL}/delete`, { data:{_id} })
        .then((data) => {
            console.log(data)
            getAllItem(setItem)
        })
        .catch((err) => console.log(err))

}

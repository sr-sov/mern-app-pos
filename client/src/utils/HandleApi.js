import axios from "axios"

const baseURL = "http://localhost:3001"

export const getAllToDo = (setToDo) => {
    axios
    .get(baseURL)
    .then(({data})=> {
        console.log('data: ', data);
        setToDo(data)
    })
}
import axios from "axios"

const baseURL = "http://localhost:3001"

export const getAllToDo = (setToDo) => {
    axios
        .get(baseURL)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}

export const addToDo = (text, setText, setToDo) => {

    axios
        .post(`${baseURL}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

export const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
        .post(`${baseURL}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

export const deleteToDo = (_id, setToDo) => {

    axios
        .delete(`${baseURL}/delete`, { data:{_id} })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

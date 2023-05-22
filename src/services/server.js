import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return  request.then(response => response.data)
}

const create = (newName) => {
const request = axios.post(baseUrl, newName)
return request.then(response => response.data)
}

const deleteName = (id, newObject) => {
    const request = axios.delete(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const update = (id, newNumber) => {
    const request = axios.put(`${baseUrl}/${id}`,newNumber)
    return request.then(response => response.data)

}


export default {getAll, create, deleteName, update};
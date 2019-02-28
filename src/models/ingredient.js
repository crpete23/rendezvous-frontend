import axios from 'axios'
const BASE_URL = 'http://localhost:3300/api/ingredients'

function getAll(){
  return axios.get(`${BASE_URL}/`)
}

function getId(id){
  return axios.get(`${BASE_URL}/${id}`)
}

function createNewIngredient(token, newIngredient){
  return axios.post(`${BASE_URL}/`, newIngredient, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}

function deleteIngredient(token, id){
  return axios.delete(`${BASE_URL}/${id}`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}


export default {
  getAll,
  getId,
  createNewIngredient,
  deleteIngredient
}

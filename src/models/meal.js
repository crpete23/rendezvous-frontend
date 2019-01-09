import axios from 'axios'
const BASE_URL = 'http://localhost:3300/api/meal'

function getAll(){
  return axios.get(`${BASE_URL}/`)
}

function getId(id){
  return axios.get(`${BASE_URL}/${id}`)
}

function createNewMeal(token, newMeal){
  return axios.post(`${BASE_URL}/`, newMeal, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}

function deleteMeal(token, id){
  return axios.delete(`${BASE_URL}/${id}`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}


export default {
  getAll,
  getId,
  createNewMeal,
  deleteMeal
}

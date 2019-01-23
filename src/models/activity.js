import axios from 'axios'
const BASE_URL = 'http://localhost:3300/api/activity'

function getAll(){
  return axios.get(`${BASE_URL}/`)
}

function getId(id){
  return axios.get(`${BASE_URL}/${id}`)
}

function createNewActivity(token, newActivity){
  return axios.post(`${BASE_URL}/`, newActivity, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}

function deleteActivity(token, id){
  return axios.delete(`${BASE_URL}/${id}`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}


export default {
  getAll,
  getId,
  createNewActivity,
  deleteActivity
}

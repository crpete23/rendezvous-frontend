import axios from 'axios'
const BASE_URL = 'http://localhost:3300/api/food'

function getAll(token){
  return axios.get(`${BASE_URL}/`, {
    headers: {
      'Authorization' :  `Bearer ${token}`
    }
  })
}

function getId(token, id){
  return axios.get(`${BASE_URL}/${id}`, {
    headers: {
      'Authorization' :  `Bearer ${token}`
    }
  })
}

function createNewLog(token, newLog){
  return axios.post(`${BASE_URL}/`, newLog, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}

function deleteLog(token, id){
  return axios.delete(`${BASE_URL}/${id}`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}


export default {
  getAll,
  getId,
  createNewLog,
  deleteLog
}

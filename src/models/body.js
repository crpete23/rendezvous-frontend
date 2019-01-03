import axios from 'axios'
const BASE_URL = 'http://localhost:3300/api/body'

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

function createNewBodyLog(token, newLog){
  return axios.post(`${BASE_URL}/`, newLog, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}

function deleteBodyLog(token, id){
  return axios.delete(`${BASE_URL}/${id}`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}


export default {
  getAll,
  getId,
  createNewBodyLog,
  deleteBodyLog
}

import axios from 'axios'
const BASE_URL = 'http://localhost:3300/api/body'

function getAll(token){
  return axios.get(`${BASE_URL}/`, {
    headers: {
      'Authorization' :  `Bearer ${token}`
    }
  })
}

function getDate(token, date){
  return axios.get(`${BASE_URL}/${date}`, {
    headers: {
      'Authorization' :  `Bearer ${token}`
    }
  })
}


export default {
  getAll,
  getDate
}

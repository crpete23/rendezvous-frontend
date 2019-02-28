import axios from 'axios'
const BASE_URL = 'http://localhost:3300/api/groups'

function getAll(){
  return axios.get(`${BASE_URL}/`)
}

function getId(id){
  return axios.get(`${BASE_URL}/${id}`)
}

function createNewGroup(token, newGroup){
  return axios.post(`${BASE_URL}/`, newGroup, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}

function deleteGroup(token, id){
  return axios.delete(`${BASE_URL}/${id}`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}


export default {
  getAll,
  getId,
  createNewGroup,
  deleteGroup
}

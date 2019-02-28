import groupModel from '../models/group'

export const GET_ALL_GROUPS = 'GET_ALL_GROUPS'

export const getAllGroups = () => {
  return async(dispatch) => {
    try {
      let response = await groupModel.getAll()
      dispatch({
        type: GET_ALL_GROUPS,
        payload: response.data.groups
      })
    } catch (e){
      console.log(e)
    }
  }
}

export const postNewGroup = (newGroup) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      return groupModel.createNewGroup(token, newGroup)
        .then(()=>{
          return groupModel.getAll()
            .then((response)=>{
              return (
                dispatch({
                  type: GET_ALL_GROUPS,
                  payload: response.data.groups
                })
              )
            })
        })
    } catch (e){
      console.log(e)
    }
  }
}

export const deleteGroup = (id) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      return groupModel.deleteLog(token, id)
        .then(()=>{
          return groupModel.getAll(token)
            .then((response)=>{
              return (
                dispatch({
                  type: GET_ALL_GROUPS,
                  payload: response.data.groups
                })
              )
            })
        })
    } catch (e){
      console.log(e)
    }
  }
}

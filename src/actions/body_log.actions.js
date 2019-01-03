import bodyModel from '../models/body'

export const GET_ALL_BODY_LOGS = 'GET_ALL_BODY_LOGS'

export const getAllBodyLogs = () => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      let response = await bodyModel.getAll(token)
      dispatch({
        type: GET_ALL_BODY_LOGS,
        payload: response.data.body_logs
      })
    } catch (e){
      console.log(e)
    }
  }
}

export const postNewBodyLog = (newLog) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      return bodyModel.createNewBodyLog(token, newLog)
        .then(()=>{
          return bodyModel.getAll(token)
            .then((response)=>{
              return (
                dispatch({
                  type: GET_ALL_BODY_LOGS,
                  payload: response.data.body_logs
                })
              )
            })
        })
    } catch (e){
      console.log(e)
    }
  }
}

export const deleteBodyLog = (date) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      return bodyModel.deleteBodyLog(token, date)
        .then(()=>{
          return bodyModel.getAll(token)
            .then((response)=>{
              return (
                dispatch({
                  type: GET_ALL_BODY_LOGS,
                  payload: response.data.body_logs
                })
              )
            })
        })
    } catch (e){
      console.log(e)
    }
  }
}

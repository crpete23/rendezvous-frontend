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

import exerciseModel from '../models/exercise'

export const GET_ALL_EXERCISE_LOGS = 'GET_ALL_EXERCISE_LOGS'

export const getAllExerciseLogs = () => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      let response = await exerciseModel.getAll(token)
      dispatch({
        type: GET_ALL_EXERCISE_LOGS,
        payload: response.data.exercise_logs
      })
    } catch (e){
      console.log(e)
    }
  }
}

export const postNewExerciseLog = (newLog) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      return exerciseModel.createNewLog(token, newLog)
        .then(()=>{
          return exerciseModel.getAll(token)
            .then((response)=>{
              return (
                dispatch({
                  type: GET_ALL_EXERCISE_LOGS,
                  payload: response.data.exercise_logs
                })
              )
            })
        })
    } catch (e){
      console.log(e)
    }
  }
}

export const deleteExerciseLog = (id) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      return exerciseModel.deleteLog(token, id)
        .then(()=>{
          return exerciseModel.getAll(token)
            .then((response)=>{
              return (
                dispatch({
                  type: GET_ALL_EXERCISE_LOGS,
                  payload: response.data.exercise_logs
                })
              )
            })
        })
    } catch (e){
      console.log(e)
    }
  }
}

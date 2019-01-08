import foodModel from '../models/food'

export const GET_ALL_FOOD_LOGS = 'GET_ALL_FOOD_LOGS'

export const getAllFoodLogs = () => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      let response = await foodModel.getAll(token)
      dispatch({
        type: GET_ALL_FOOD_LOGS,
        payload: response.data.food_logs
      })
    } catch (e){
      console.log(e)
    }
  }
}

export const postNewFoodLog = (newLog) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      return foodModel.createNewLog(token, newLog)
        .then(()=>{
          return foodModel.getAll(token)
            .then((response)=>{
              return (
                dispatch({
                  type: GET_ALL_FOOD_LOGS,
                  payload: response.data.food_logs
                })
              )
            })
        })
    } catch (e){
      console.log(e)
    }
  }
}

export const deleteFoodLog = (id) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      return foodModel.deleteLog(token, id)
        .then(()=>{
          return foodModel.getAll(token)
            .then((response)=>{
              return (
                dispatch({
                  type: GET_ALL_FOOD_LOGS,
                  payload: response.data.food_logs
                })
              )
            })
        })
    } catch (e){
      console.log(e)
    }
  }
}

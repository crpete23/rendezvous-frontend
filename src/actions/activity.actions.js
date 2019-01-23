import activityModel from '../models/activity'

export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES'

export const getAllActivities = () => {
  return async(dispatch) => {
    try {
      let response = await activityModel.getAll()
      dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: response.data.activities
      })
    } catch (e){
      console.log(e)
    }
  }
}

export const postNewActivity = (newActivity) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      return activityModel.createNewActivity(token, newActivity)
        .then(()=>{
          return activityModel.getAll()
            .then((response)=>{
              return (
                dispatch({
                  type: GET_ALL_ACTIVITIES,
                  payload: response.data.activities
                })
              )
            })
        })
    } catch (e){
      console.log(e)
    }
  }
}

export const deleteActivity = (id) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      return activityModel.deleteLog(token, id)
        .then(()=>{
          return activityModel.getAll(token)
            .then((response)=>{
              return (
                dispatch({
                  type: GET_ALL_ACTIVITIES,
                  payload: response.data.activities
                })
              )
            })
        })
    } catch (e){
      console.log(e)
    }
  }
}

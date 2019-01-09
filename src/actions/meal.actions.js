import mealModel from '../models/meal'

export const GET_ALL_MEALS = 'GET_ALL_MEALS'

export const getAllMeals = () => {
  return async(dispatch) => {
    try {
      let response = await mealModel.getAll()
      dispatch({
        type: GET_ALL_MEALS,
        payload: response.data.meals
      })
    } catch (e){
      console.log(e)
    }
  }
}

export const postNewMeal = (newMeal) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      return mealModel.createNewMeal(token, newMeal)
        .then(()=>{
          return mealModel.getAll()
            .then((response)=>{
              return (
                dispatch({
                  type: GET_ALL_MEALS,
                  payload: response.data.meals
                })
              )
            })
        })
    } catch (e){
      console.log(e)
    }
  }
}

export const deleteMeal = (id) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      return mealModel.deleteLog(token, id)
        .then(()=>{
          return mealModel.getAll(token)
            .then((response)=>{
              return (
                dispatch({
                  type: GET_ALL_MEALS,
                  payload: response.data.meals
                })
              )
            })
        })
    } catch (e){
      console.log(e)
    }
  }
}

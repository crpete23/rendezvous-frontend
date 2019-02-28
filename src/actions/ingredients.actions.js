import ingredientModel from '../models/ingredient'

export const GET_ALL_INGREDIENTS = 'GET_ALL_INGREDIENTS'

export const getAllIngredients = () => {
  return async(dispatch) => {
    try {
      let response = await ingredientModel.getAll()
      dispatch({
        type: GET_ALL_INGREDIENTS,
        payload: response.data.ingredients
      })
    } catch (e){
      console.log(e)
    }
  }
}

export const postNewIngredient = (newIngredient) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      return ingredientModel.createNewIngredient(token, newIngredient)
        .then(()=>{
          return ingredientModel.getAll()
            .then((response)=>{
              return (
                dispatch({
                  type: GET_ALL_INGREDIENTS,
                  payload: response.data.ingredients
                })
              )
            })
        })
    } catch (e){
      console.log(e)
    }
  }
}

export const deleteIngredient = (id) => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      return ingredientModel.deleteLog(token, id)
        .then(()=>{
          return ingredientModel.getAll(token)
            .then((response)=>{
              return (
                dispatch({
                  type: GET_ALL_INGREDIENTS,
                  payload: response.data.ingredients
                })
              )
            })
        })
    } catch (e){
      console.log(e)
    }
  }
}

import {
  GET_ALL_INGREDIENTS
} from '../actions/ingredients.actions'

let initialState = {
  ingredients : []
}

export default(state = initialState, action) => {
  switch(action.type){
    case GET_ALL_INGREDIENTS:
      return {
        ingredients: action.payload
      }
    default:
      return state;
  }
}

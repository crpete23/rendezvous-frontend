import {
  GET_ALL_MEALS
} from '../actions/meal.actions'

let initialState = {
  meals : []
}

export default(state = initialState, action) => {
  switch(action.type){
    case GET_ALL_MEALS:
      return {
        meals: action.payload
      }
    default:
      return state;
  }
}

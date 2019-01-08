import {
  GET_ALL_FOOD_LOGS
} from '../actions/food_log.actions'

let initialState = {
  food_logs : []
}

export default(state = initialState, action) => {
  switch(action.type){
    case GET_ALL_FOOD_LOGS:
      return {
        food_logs: action.payload
      }
    default:
      return state;
  }
}

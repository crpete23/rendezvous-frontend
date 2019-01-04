import {
  GET_ALL_EXERCISE_LOGS
} from '../actions/exercise_log.actions'

let initialState = {
  exercise_logs : []
}

export default(state = initialState, action) => {
  switch(action.type){
    case GET_ALL_EXERCISE_LOGS:
      return {
        exercise_logs: action.payload
      }
    default:
      return state;
  }
}

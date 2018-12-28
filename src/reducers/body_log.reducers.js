import {
  GET_ALL_BODY_LOGS
} from '../actions/body_log.actions'

let initialState = {
  body_logs : []
}

export default(state = initialState, action) => {
  switch(action.type){
    case GET_ALL_BODY_LOGS:
      return {
        body_logs: action.payload
      }
    default:
      return state;
  }
}

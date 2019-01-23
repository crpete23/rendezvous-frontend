import {
  GET_ALL_ACTIVITIES
} from '../actions/activity.actions'

let initialState = {
  activities : []
}

export default(state = initialState, action) => {
  switch(action.type){
    case GET_ALL_ACTIVITIES:
      return {
        activities: action.payload
      }
    default:
      return state;
  }
}

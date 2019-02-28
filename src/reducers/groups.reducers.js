import {
  GET_ALL_GROUPS
} from '../actions/groups.actions'

let initialState = {
  groups : []
}

export default(state = initialState, action) => {
  switch(action.type){
    case GET_ALL_GROUPS:
      return {
        groups: action.payload
      }
    default:
      return state;
  }
}

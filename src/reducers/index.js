import { combineReducers } from 'redux';
import auth from './auth.reducers';
import body_log from './body_log.reducers'

const reducers = combineReducers({
  auth, body_log
})

export default reducers

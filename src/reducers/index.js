import { combineReducers } from 'redux';
import auth from './auth.reducers';
import body_log from './body_log.reducers'
import exercise_log from './exercise_log.reducers'
import food_log from './food_log.reducers'
import meals from './meal.reducers'

const reducers = combineReducers({
  auth, body_log, exercise_log, food_log, meals
})

export default reducers

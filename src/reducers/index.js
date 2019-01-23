import { combineReducers } from 'redux';
import auth from './auth.reducers';
import body_log from './body_log.reducers'
import exercise_log from './exercise_log.reducers'
import food_log from './food_log.reducers'
import meals from './meal.reducers'
import activities from './activity.reducers'

const reducers = combineReducers({
  auth, body_log, exercise_log, food_log, meals, activities
})

export default reducers

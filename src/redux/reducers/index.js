import { combineReducers } from 'redux'
import auth from './authReducer'
import quiz from './quizReducer'

export default combineReducers({
  auth,
  quiz
})
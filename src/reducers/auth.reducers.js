import {
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGNUP_PENDING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGOUT,
  USER_VERIFIED
} from '../actions/auth.actions'

let initialState = {
  isLoading: false,
  showLoginError: false,
  showSignupError: false,
  user: {}
};

export default(state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      return {...state, isLoading: true}
    case USER_LOGIN_SUCCESS:
      return {...state, showLoginError: false, isLoading: false, user: action.payload}
    case USER_LOGIN_FAILED:
      return {...state, isLoading: false, showLoginError: true}
    case USER_SIGNUP_PENDING:
      return {...state, isLoading: true}
    case USER_SIGNUP_SUCCESS:
      return {...state, showSignupError: false, isLoading: false, user: action.payload}
    case USER_SIGNUP_FAILED:
      return {...state, isLoading: false, showSignupError: true}
    case USER_LOGOUT:
      return { isLoading: false,
        showLoginError: false,
        showSignupError: false,
        user: {}
      }
    case USER_VERIFIED:
      return {...state, showLoginError: false, isLoading: false, user: action.payload}
    default:
      return state;
  }
}

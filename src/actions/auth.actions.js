import authModel from '../models/auth'

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_VERIFIED = 'USER_VERIFIED'

export const userLogin = (signInAttempt) => {
  return async (dispatch) => {
    try {
      dispatch({type: USER_LOGIN_PENDING})
      let response = await authModel.login(signInAttempt)

      if(response.data.token){
        localStorage.setItem('token', response.data.token)
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: response.data
        })
      } else {
        dispatch({
          type: USER_LOGIN_FAILED,
          payload: response.data
        })
      }
    } catch(err) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      })
    }
  }
};

export const userSignup = (newUser) => {
  return async (dispatch) => {
    try {
      dispatch({type: USER_LOGIN_PENDING})
      let response = await authModel.signUp(newUser)

      if(response.data.token){
        localStorage.setItem('token', response.data.token)
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data
        })
      } else {
        dispatch({
          type: USER_SIGNUP_FAILED,
          payload: response.data
        })
      }
    } catch(err) {
      dispatch({
        type: USER_SIGNUP_FAILED,
        payload: err
      })
    }
  }
};

export const userVerify = () => {
  const token = localStorage.getItem('token')
  return async (dispatch) => {
    try {
      dispatch({type: USER_LOGIN_PENDING})
      let response = await authModel.verify(token)

      if(response.data.userId){
        dispatch({
          type: USER_VERIFIED,
          payload: response.data
        })
      } else {
        dispatch({
          type: USER_LOGOUT,
          payload: response.data
        })
      }
    } catch(err) {
      dispatch({
        type: USER_LOGOUT,
        payload: err
      })
    }
  }
};

export const userLogout = () => {
  return async (dispatch) => {
    localStorage.setItem('token', null)
    dispatch({type: USER_LOGOUT})
  }
}

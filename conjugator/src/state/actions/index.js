import { axiosWithAuth } from '../../utils/Auth';


//endpoints
const LOGIN_ENDPOINT = '/api/login';
const REGISTRATION_ENDPOINT = '/api/register';
const WORD_ENDPOINT = '/api/words';
const STATS_ENDPOINT = '/api/stats';
const SETTINGS_ENDPOINT = '/api/settings';
const GOAL_ENDPOINT = '/api/goal'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = creds => dispatch => {
  console.log(creds)
  dispatch({ type: LOGIN_START, payload: creds.username });
  return axiosWithAuth()
    .post(LOGIN_ENDPOINT, creds)
    .then(res => {
      console.log(res.data)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => console.log(err.response));
};

export const NEW_USER_START = 'NEW_USER_START';
export const NEW_USER_SUCCESS = 'NEW_USER_SUCCESS';
export const NEW_USER_FAILURE = 'NEW_USER_FAILURE';
export const newUser = creds => dispatch => {
  dispatch({ type: NEW_USER_START });
  return axiosWithAuth()
    .post(REGISTRATION_ENDPOINT, creds)
    .then(res => {
      dispatch({ type: NEW_USER_SUCCESS, payload: res.data });
      return true;
    })
    .then(
      console.log(true)
      // setTimeout(() => {dispatch(login(creds))}, 2000)
    )
    .catch(err => console.log(err.response));
};

export const LOGOUT = 'LOGOUT'
export const logout = () => dispatch => {
  console.log('action')
  dispatch({
    type: LOGOUT
  })
}

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const getData = (id) => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axiosWithAuth()
    // .get(`/saves/${id}`)
    .get(`/saves/`)
    .then(res => {
      console.log(res)
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
    });
};

  export const SIGNUP_START = 'SIGNUP_START';
  export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
  export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
  export const SET_AUTH_ERROR = 'SET_AUTH_ERROR';

  export const signup = (username, password) => dispatch => {
    dispatch ({
      type: SIGNUP_START
    })
    return axiosWithAuth().
      post(REGISTRATION_ENDPOINT, {
      username,
      password
    })
    .then (res => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: {
          token: res.data.token,
          username: username
        }
      })
    })
    .catch(err => {
      let error = '';
      if(err.response.status >= 500) {
        error = err.response.statusText;
      } else {
        error = err.response.data.message;
      }
      dispatch({
        type: SIGNUP_FAILURE,
        payload: error
      })
    });
  }
  
  export const setAuthError = error => dispatch => {
    dispatch({
      type: SET_AUTH_ERROR,
      payload: error
    })
    return true;
  }
  
  export const GETWORD_START = 'GETWORD_START';
  export const GETWORD_SUCCESS = 'GETWORD_SUCCESS';
  export const GETWORD_FAILURE = 'GETWORD_FAILURE';

  export const getWord = token => dispatch => {
    dispatch({
      type: GETWORD_START
    })
    return axiosWithAuth()
    .create({ headers: {
      token } })  
    .get(WORD_ENDPOINT)
      .then(res => {
        dispatch({
          type: GETWORD_SUCCESS,
          payload: res.data     
        })
      })
      .catch(err => {
        console.log(err.response)
        dispatch({
          type: GETWORD_FAILURE,
        })
      })
  }

  export const GETSTATS_START = 'GETSTATS_START';
  export const GETSTATS_SUCCESS = 'GETSTATS_SUCCESS';
  export const GETSTATS_FAILURE = 'GETSTATS_FAILURE';
  export const getStats = token => dispatch => {
    dispatch({
      type: GETSTATS_START
    })
    return axiosWithAuth().
create({ headers: {
      token } }).get(STATS_ENDPOINT, { token: token })
      .then(res => {
        console.log(res);
        dispatch({
          type: GETSTATS_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        console.log('error getting stats');
        console.log(err.response);
      })
  }

  export const RECORD_CORRECT = 'RECORD_CORRECT';
  export const RECORD_INCORRECT = 'RECORD_INCORRECT';

  export const recordCorrect = (word, token) => dispatch => {
    dispatch({
      type: RECORD_CORRECT
    });
  
    return axiosWithAuth().
create({ headers: {
      token } }).post(WORD_ENDPOINT, {
      ...word,
      correct: 1
    })
    .catch(err => {
      console.log(err.message);
    })
  }
  
  export const recordIncorrect = (word, token) => dispatch => {
    console.log(token);
    dispatch({
      type: RECORD_INCORRECT
    });
    return axiosWithAuth().
create({ headers: {
      token } }).post(WORD_ENDPOINT, {
      ...word,
      correct: 0
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  export const QUEUE_RECORD_CORRECT = 'QUEUE_RECORD_CORRECT';
  export const QUEUE_RECORD_INCORRECT = 'QUEUE_RECORD_INCORRECT';
  export const CLEAR_QUEUE = 'CLEAR_QUEUE';

  export const queueRecordCorrect = (word) => dispatch => {
    dispatch({
      type: QUEUE_RECORD_CORRECT,
      payload: word
    })
  }

  export const queueRecordIncorrect = (word) => dispatch => {
    dispatch({
      type: QUEUE_RECORD_INCORRECT,
      payload: word
    })
  }

  export const clearQueue = () => dispatch => {
    dispatch({
      type: CLEAR_QUEUE
    })
    return true;
  }

export const GET_SETTINGS_START = 'GET_SETTINGS_START';
export const GET_SETTINGS_SUCCESS = 'GET_SETTINGS_SUCCESS';
export const GET_SETTINGS_FAILURE = 'GET_SETTINGS_FAILURE';
export const SET_FILTER_START = 'SET_FILTER_START';
export const SET_FILTER_SUCCESS = 'SET_FILTER_SUCCESS';
export const SET_FILTER_FAILURE = 'SET_FILTER_FAILURE';
export const GET_GOAL_START = 'GET_GOAL_START';
export const GET_GOAL_SUCCESS = 'GET_GOAL_SUCCESS';
export const GET_GOAL_FAILURE = 'GET_GOAL_FAILURE';
export const POST_GOAL_START = 'POST_GOAL_START';
export const POST_GOAL_SUCCESS = 'POST_GOAL_SUCCESS';
export const POST_GOAL_FAILURE = 'POST_GOAL_FAILURE';



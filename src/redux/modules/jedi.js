import axios from 'axios';
import config from 'config';

const HOST = config().API_HOST;
const JEDI_ENDPOINT = 'jedi';

export const FETCH_JEDIS_REQUESTED = '@@jedis/FETCH_REQUESTED';
export const FETCH_JEDIS_SUCCEEDED = '@@jedis/FETCH_SUCCEEDED';
export const FETCH_JEDIS_FAILED = '@@jedis/FETCH_FAILED';

export const ADD_JEDI_REQUESTED = '@@jedis/ADD_REQUESTED';
export const ADD_JEDI_SUCCEEDED = '@@jedis/ADD_SUCCEEDED';
export const ADD_JEDI_FAILED = '@@jedis/ADD_FAILED';

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  jedis: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JEDIS_REQUESTED :
      return {
        ...state,
        loading: true,
      };
    case FETCH_JEDIS_SUCCEEDED :
      return {
        ...state,
        jedis: [...action.payload],
        loading: false,
        loaded: true,
      };

    case FETCH_JEDIS_FAILED :
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true,
        debugError: action.error.message,
      };

      case ADD_JEDI_REQUESTED :
        return {
          ...state,
          loading: true,
        };

      case ADD_JEDI_SUCCEEDED :
        return {
          ...state,
          jedis: [...state.jedis, action.newJedi],
          loading: false,
        };

      case ADD_JEDI_FAILED :
        return {
          ...state,
          loading: false,
          error: true,
          debugError: action.error.message,
        };

    default:
      return state;
  }
}

export function getJedis() {
  return {
    type: FETCH_JEDIS_REQUESTED,
  };
}

export function setJedis(jedis) {
  return {
    type: FETCH_JEDIS_SUCCEEDED,
    payload: jedis
  };
}

export function fetchJedisFailed(error) {
  return {
    type: FETCH_JEDIS_FAILED,
    error: error
  };
}

export function addJedi() {
  return {
    type: ADD_JEDI_REQUESTED,
  };
}

export function addJediSucceded(jedi) {
  return {
    type: ADD_JEDI_SUCCEEDED,
    newJedi: jedi
  };
}

export function addJediFailed(error) {
  return {
    type: ADD_JEDI_FAILED,
    error: error
  };
}

export function fetchJedi() {
  return (dispatch) => {
    dispatch(getJedis());
    axios.get(HOST + JEDI_ENDPOINT)
      .then( (res) => { dispatch(setJedis(res.data)) } )
      .catch( (error) => { dispatch(fetchJedisFailed(error)) } );
  }
}

export function postJedi(jedi) {
  return (dispatch) => {
    dispatch(addJedi());
    axios.post(HOST + JEDI_ENDPOINT, { name: jedi.name })
      .then( (res) => { dispatch(addJediSucceded(res.data)) } )
      .catch( (error) => { dispatch(addJediFailed(error)) } );
  }
}

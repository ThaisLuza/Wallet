// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_TYPE } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_TYPE:
    return {
      ...state,
      user: action.payload,
    };
  default:
    return state;
  }
}

export default loginReducer;

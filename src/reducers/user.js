// Esse reducer será responsável por tratar as informações da pessoa usuária
export const LOGIN_TYPE = 'LOGIN';

const INITIAL_STATE = { email: '' };

function login(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_TYPE: {
    const { email } = action.value;
    return { email };
  }
  default:
    return state;
  }
}

export default login;

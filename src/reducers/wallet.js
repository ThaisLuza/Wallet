// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  GET_CURRENCIES_TYPE,
  CREATE_EXPENSE_TYPE,
  DELETE_EXPENSE_TYPE,
} from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES_TYPE:
    return {
      ...state,
      wallet: action.payload.currencies,
    };
  case CREATE_EXPENSE_TYPE:
    return {
      ...state,
      wallet: action.payload.expenses,
    };
  case DELETE_EXPENSE_TYPE:
    return state.filter((register) => register !== action.value);
  default:
    return state;
  }
}

export default walletReducer;

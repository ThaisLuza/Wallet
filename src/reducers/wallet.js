// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  GET_COINS_TYPE,
  DELETE_EXPENSE_TYPE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_COINS_TYPE:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: action.obj.id,
        value: action.obj.value,
        description: action.obj.description,
        currency: action.obj.currency,
        method: action.obj.method,
        tag: action.obj.tag,
        exchangeRates: action.payload,
      }],
    };
  case DELETE_EXPENSE_TYPE:
    return {
      ...state,
      expenses: [...state.expenses.filter((obj) => obj.id !== action.payload)],
    };
  default:
    return state;
  }
}

export default wallet;

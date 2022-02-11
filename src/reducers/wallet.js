// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  GET_COINS_TYPE,
  // CREATE_EXPENSE_TYPE,
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
        despesa: action.obj.despesa,
        descricao: action.obj.descricao,
        moeda: action.obj.moeda,
        metodo: action.obj.metodo,
        tag: action.obj.tag,
        exchangeRates: action.payload,
      }],
    };
  // case CREATE_EXPENSE_TYPE:
  //   return {
  //     ...state,
  //     expenses: action.payload,
  //     currencies: action.payload,
  //   };
  case DELETE_EXPENSE_TYPE:
    return state.filter((register) => register !== action.value);
  default:
    return state;
  }
}

export default wallet;

// Coloque aqui suas actions
// import getApi from '../services/getApi';

export const LOGIN_TYPE = 'LOGIN';
export const GET_COINS_TYPE = 'GET_COINS';
export const CREATE_EXPENSE_TYPE = 'CREATE_EXPENSE';
export const DELETE_EXPENSE_TYPE = 'DELETE_EXPENSE';

export const login = (email) => ({
  type: LOGIN_TYPE,
  email,
});

// export const getTotal = (payload) => ({
//   type: GET_TOTAL_TYPE,
//   payload,
// });

export const getCoins = (payload, obj) => ({
  type: GET_COINS_TYPE,
  payload,
  obj,
});

export const createExpense = (payload) => ({
  type: CREATE_EXPENSE_TYPE,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE_TYPE,
  payload,
});

export const API = 'https://economia.awesomeapi.com.br/json/all';

export const fetchAPI = (obj) => async (dispatch) => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    dispatch(getCoins(data, obj));
  } catch (error) {
    console.error(error.message);
  }
};

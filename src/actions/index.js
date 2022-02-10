// Coloque aqui suas actions
export const LOGIN_TYPE = 'LOGIN';
export const GET_CURRENCIES_TYPE = 'GET_CURRENCY';
export const CREATE_EXPENSE_TYPE = 'CREATE_EXPENSE';
export const DELETE_EXPENSE_TYPE = 'DELETE_EXPENSE';

export const login = (email) => ({
  type: LOGIN_TYPE,
  email,
});

export const getCurrencies = (payload) => ({
  type: GET_CURRENCIES_TYPE,
  payload,
});

export const createExpense = (payload) => ({
  type: CREATE_EXPENSE_TYPE,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE_TYPE,
  payload,
});

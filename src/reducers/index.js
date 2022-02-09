import { combineReducers } from 'redux';
import loginReducer from './user';
// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
const rootReducers = combineReducers({
  loginReducer,
});

export default rootReducers;

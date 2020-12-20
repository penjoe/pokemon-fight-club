import {createStore, combineReducers} from 'redux';

import pokeReducer from './pokeReducer.js';

const reducers = combineReducers({
  pokemon: pokeReducer,
});

const store = createStore(reducers);

export default store;
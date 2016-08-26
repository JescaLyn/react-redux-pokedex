import React from 'react';
import ReactDOM from 'react-dom';
import * as API from './util/api_util';
import * as ACTIONS from './actions/pokemon_actions';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  API.fetchAllPokemon((pokemon) => store.dispatch(ACTIONS.receiveAllPokemon(pokemon)));
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});

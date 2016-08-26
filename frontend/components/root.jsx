import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import * as ACTIONS from '../actions/pokemon_actions';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ToyDetailContainer from './toys/toy_detail_container';
// import PokemonFormContainer from './pokemon/pokemon_form_container';

const requestAllPoke = () => store.dispatch(ACTIONS.requestAllPokemon());
const requestPoke = (nextState) => {
  let id = nextState.params.id;
  return store.dispatch(ACTIONS.requestPokemon(id));
};

export default ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={PokemonIndexContainer} onEnter={requestAllPoke}>
        <Route path="/pokemon/:id" component={PokemonDetailContainer} onEnter={requestPoke} />
        <Route path="/pokemon/:pokemonId/toys/:id" component={ToyDetailContainer} />
      </Route>
    </Router>
  </Provider>
);

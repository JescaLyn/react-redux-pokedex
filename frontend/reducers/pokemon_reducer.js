import { POKEMON_CONSTANTS } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export default (state = { allPokemon: [], pokemon: {} }, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case POKEMON_CONSTANTS.RECEIVE_ALL_POKEMON:
      newState.allPokemon = action.allPokemon;
      return newState;
    case POKEMON_CONSTANTS.RECEIVE_POKEMON:
      newState.pokemon = action.pokemon;
      return newState;
    case POKEMON_CONSTANTS.RECEIVE_NEW_POKEMON:
      let allPokemon = state.allPokemon;
      let nextPokemon = allPokemon.find(pokemon => (pokemon.id > action.pokemon.id));
      let id = allPokemon.indexOf(nextPokemon);
      newState.allPokemon = allPokemon.slice(0, id)
        .concat([action.pokemon])
        .concat(allPokemon.slice(id));
      return newState;
    default:
      return state;
  }
};

import * as API from '../util/api_util';
import * as ACTIONS from '../actions/pokemon_actions';

export default ({dispatch}) => next => action => {
  let success;
  switch (action.type) {
    case ACTIONS.POKEMON_CONSTANTS.REQUEST_ALL_POKEMON:
      success = (allPokemon) => dispatch(ACTIONS.receiveAllPokemon(allPokemon));
      API.fetchAllPokemon(success);
      break;
    case ACTIONS.POKEMON_CONSTANTS.REQUEST_POKEMON:
      success = (pokemon) => dispatch(ACTIONS.receivePokemon(pokemon));
      API.fetchPokemon(action.pokemonId, success);
      break;
    case ACTIONS.POKEMON_CONSTANTS.CREATE_POKEMON:
      success = (pokemon) => dispatch(ACTIONS.receiveNewPokemon(pokemon));
      API.createPokemon(action.pokemon, success);
      break;
    default:
      return next(action);
  }
};

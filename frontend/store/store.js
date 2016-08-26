import { createStore, applyMiddleware } from 'redux';
import PokeReducer from '../reducers/pokemon_reducer';
import PokemonMiddleware from '../middleware/pokemon_middleware';

export default () => (
  createStore(
    PokeReducer,
    applyMiddleware(PokemonMiddleware)
  )
);

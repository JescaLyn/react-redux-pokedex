export const POKEMON_CONSTANTS = {
  RECEIVE_ALL_POKEMON: "RECEIVE_ALL_POKEMON",
  REQUEST_ALL_POKEMON: "REQUEST_ALL_POKEMON",
  REQUEST_POKEMON: "REQUEST_POKEMON",
  RECEIVE_POKEMON: "RECEIVE_POKEMON",
  CREATE_POKEMON: "CREATE_POKEMON",
  RECEIVE_NEW_POKEMON: "RECEIVE_NEW_POKEMON"
};

export const receiveAllPokemon = (allPokemon) => ({
  type: POKEMON_CONSTANTS.RECEIVE_ALL_POKEMON,
  allPokemon
});

export const requestAllPokemon = () => ({
  type: POKEMON_CONSTANTS.REQUEST_ALL_POKEMON
});

export const requestPokemon = (pokemonId) => ({
  type: POKEMON_CONSTANTS.REQUEST_POKEMON,
  pokemonId
});

export const receivePokemon = (pokemon) => ({
  type: POKEMON_CONSTANTS.RECEIVE_POKEMON,
  pokemon
});

export const createPokemon = (pokemon) => ({
  type: POKEMON_CONSTANTS.CREATE_POKEMON,
  pokemon
});

export const receiveNewPokemon = (pokemon) => ({
  type: POKEMON_CONSTANTS.RECEIVE_NEW_POKEMON,
  pokemon
});

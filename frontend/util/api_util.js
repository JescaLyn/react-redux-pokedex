export const fetchAllPokemon = (success, error) => {
  $.ajax({
    method: 'get',
    url: 'api/pokemon',
    success,
    error
  });
};

export const fetchPokemon = (pokemonId, success, error) => {
  $.ajax({
    method: "get",
    url: `/api/pokemon/${pokemonId}`,
    success,
    error
  });
};

export const createPokemon = (pokemon, success, error) => {
  $.ajax({
    method: "post",
    url: `/api/pokemon`,
    data: pokemon,
    success,
    error
  });
};

import React from 'react';
import { withRouter } from 'react-router';

const handleToyClick = (router, url) => {
  router.push(url);
};

export default withRouter(({ pokemon, router }) => {
  let moves;
  if (pokemon.moves) {
    moves = pokemon.moves.join(", ");
  }

  let toys;
  if (pokemon.toys) {
    toys = pokemon.toys.map(toy => (
      <li key={toy.id}
        onClick={() => handleToyClick(router, `/pokemon/${pokemon.id}/toys/${toy.id}`)}>
        <img src={toy.image_url}/>
      </li>
    ));
  }

  return(
    <section className="pokemon-detail">
      <ul>
        <img src={pokemon.image_url} alt=""/>
          <li><h2>{pokemon.name}</h2></li>
          <li>Type: {pokemon.type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Moves: {moves}</li>
        <section className="toys">
            <h3>Toys</h3>
          <ul className="toy-list">
            {toys}
          </ul>
        </section>
      </ul>
    </section>
  );
});

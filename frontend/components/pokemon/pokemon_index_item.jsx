import React from 'react';
import { withRouter } from 'react-router';

const _handleClick = (router, url) => {
  router.push(url);
};

export default withRouter(({ pokemon, router }) => (
  <li className="pokemon-index-item" onClick={() => _handleClick(router, `/pokemon/${pokemon.id}`)}>
    <span>{pokemon.name}</span>
    <img src={pokemon.image_url} alt={pokemon.name}/>
  </li>
));

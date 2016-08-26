import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  render(){
    const allPokemon = this.props.pokemon.map(pokemon => (
      <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
    ));

    return (
      <section className="pokedex">
        <ul>
          {allPokemon}
        </ul>
        {this.props.children}
      </section>
    );
  }
}

export default PokemonIndex;

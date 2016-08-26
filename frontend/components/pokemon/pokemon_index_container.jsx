import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index';

const mapStateToProps = (state) => ({
  pokemon: state.allPokemon
});

export default connect(
  mapStateToProps
)(PokemonIndex);

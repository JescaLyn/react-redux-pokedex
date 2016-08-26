import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => ({
  pokemon: state.pokemon
});

export default connect(
  mapStateToProps
)(PokemonDetail);

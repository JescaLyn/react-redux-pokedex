import { connect } from 'react-redux';
import ToyDetail from './toy_detail';

const mapStateToProps = (state, ownProps) => ({
  toy: state.pokemon.toys.find(toy => (toy.id == ownProps.params.id))
});

export default connect(
  mapStateToProps
)(ToyDetail);

import React from 'react';

class PokemonForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      id: "",
      attack: "",
      defense: "",
      poke_type: "",
      image_url: "",
      moves: []
    };
  }

  updateField (fieldName, e) {
    this.setState({fieldName: e.target.value()});
  }

  render(){
    return (
      <section className="pokemon-detail">
        {console.log('hi')}
        <img src="/assets/pokemon-logo.png"/>
        <form className="pokemon-form" onSubmit={this.handleSubmit}>

          <label>Name:
            <input type="text" value={this.state.name} onChange={this.updateField.bind(this, "name")} />
          </label>

          <label>ID:
            <input type="number" value={this.state.id} onChange={this.updateField.bind(this, "id")} />
          </label>

          <label>Attack:
            <input type="number" value={this.state.attack} onChange={this.updateField.bind(this, "attack")} />
          </label>

          <label>Defense:
            <input type="number" value={this.state.defense} onChange={this.updateField.bind(this, "defense")} />
          </label>

          <label>Image URL:
            <input type="text" value={this.state.image_url} onChange={this.updateField.bind(this, "image_url")} />
          </label>

          <label>Move 1:
            <input type="text" value={this.state.move[0]} onChange={this.updateField.bind(this, "moves[0]")} />
          </label>

          <label>Move 2:
            <input type="text" value={this.state.move[1]} onChange={this.updateField.bind(this, "moves[1]")} />
          </label>

          <label>Move 3:
            <input type="text" value={this.state.move[2]} onChange={this.updateField.bind(this, "moves[2]")} />
          </label>

          <label>Move 4:
            <input type="text" value={this.state.move[3]} onChange={this.updateField.bind(this, "moves[3]")} />
          </label>

          <label>Type:
            <select onChange={this.updateField.bind(this, "poke_type")>
              <option value="fire">fire</option>
              <option value="bug">bug</option>
            </select>
          </label>

          <button>Create Pokemon</button>
        </form>
      </section>
     );
  }
}

export default PokemonForm;

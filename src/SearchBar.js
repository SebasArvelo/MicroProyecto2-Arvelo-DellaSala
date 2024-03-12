import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  // Función para manejar cambios en el campo de búsqueda
  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  // Función para manejar el envío del término de búsqueda
  handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    // Aquí puedes agregar la lógica para realizar la búsqueda
    console.log('Término de búsqueda:', searchTerm);
    // Luego puedes llamar a una función que realice la búsqueda en la base de datos
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div>
        <h2>Buscar Juegos</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={this.handleChange}
            placeholder="Buscar juegos..."
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;

import React, { Component } from 'react';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      favoriteGame: ''
    };
  }

  // Función para manejar cambios en los campos del formulario
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  // Función para manejar el envío del formulario
  handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para guardar la información del perfil
    console.log('Información del perfil:', this.state);
    // Luego puedes llamar a una función que actualice la información del perfil en la base de datos
  };

  render() {
    const { firstName, lastName, favoriteGame } = this.state;

    return (
      <div>
        <h2>Perfil de Usuario</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">Nombre:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="favoriteGame">Videojuego Preferido:</label>
            <input
              type="text"
              id="favoriteGame"
              value={favoriteGame}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Guardar Cambios</button>
        </form>
      </div>
    );
  }
}

export default ProfilePage;

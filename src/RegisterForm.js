import React, { Component } from 'react';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
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
    // Aquí puedes agregar la lógica para registrar al usuario
    console.log('Información del nuevo usuario:', this.state);
    // Luego puedes llamar a una función que registre al usuario en la base de datos
  };

  render() {
    const { firstName, lastName, username, email, password, favoriteGame } = this.state;

    return (
      <div>
        <h2>Registro de Usuario</h2>
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
            <label htmlFor="username">Nombre de Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
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
          <button type="submit">Registrarse</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;

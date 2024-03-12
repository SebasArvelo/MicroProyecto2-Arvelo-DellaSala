import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ user }) => {
  return (
    <div>
      <h1>Bienvenido a la página principal</h1>
      {user ? (
        <div>
          <p>Bienvenido, {user.displayName}!</p>
          <p>Tu correo electrónico es: {user.email}</p>
          <Link to="/profile">Ver perfil</Link>
        </div>
      ) : (
        <p>Inicia sesión para ver el contenido.</p>
      )}
    </div>
  );
};

export default HomePage;

import React from 'react';

const ClubList = ({ clubs }) => {
  return (
    <div>
      <h2>Lista de Clubes</h2>
      {clubs.map((club) => (
        <div key={club.ID}>
          <h3>{club.nombre}</h3>
          <p>{club.descripcion}</p>
          <h4>Videojuegos:</h4>
          <ul>
            {club.videojuegos.map((videojuegoId) => (
              <li key={videojuegoId}>
                {/* Aquí deberías buscar el videojuego en tu base de datos y mostrar su título */}
                Videojuego ID: {videojuegoId}
              </li>
            ))}
          </ul>
          <button>Unirse al Club</button>
        </div>
      ))}
    </div>
  );
};

export default ClubList;


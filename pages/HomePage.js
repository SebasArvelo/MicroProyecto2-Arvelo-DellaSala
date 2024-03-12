import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase/firebase';

const HomePage = ({ user }) => {
  const [videojuegos, setVideojuegos] = useState([]);
  const [clubes, setClubes] = useState([]);

  useEffect(() => {
    const fetchVideojuegos = async () => {
      const videojuegosCollection = await firestore.collection('videojuegos').get();
      const videojuegosData = videojuegosCollection.docs.map(doc => doc.data());
      setVideojuegos(videojuegosData);
    };

    const fetchClubes = async () => {
      const clubesCollection = await firestore.collection('clubes').get();
      const clubesData = clubesCollection.docs.map(doc => doc.data());
      setClubes(clubesData);
    };

    fetchVideojuegos();
    fetchClubes();
  }, []);

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

      <h2>Videojuegos disponibles:</h2>
      <ul>
        {videojuegos.map(videojuego => (
          <li key={videojuego.ID}>
            <strong>Título:</strong> {videojuego.Título}<br />
            <strong>Género:</strong> {videojuego.Género}<br />
            <strong>Descripción:</strong> {videojuego.Descripción}
          </li>
        ))}
      </ul>

      <h2>Clubes disponibles:</h2>
      <ul>
        {clubes.map(club => (
          <li key={club.ID}>
            <strong>Nombre:</strong> {club.Nombre}<br />
            <strong>Descripción:</strong> {club.Descripción}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;



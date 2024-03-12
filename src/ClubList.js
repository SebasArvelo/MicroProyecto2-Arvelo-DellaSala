import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase/firebase';

const ClubList = () => {
  const [clubs, setClubs] = useState([]);

  // Función asíncrona para obtener la lista de clubes desde Firestore
  const fetchClubs = async () => {
    try {
      const clubsCollection = firebase.firestore().collection('clubs');
      const snapshot = await clubsCollection.get();
      const clubList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setClubs(clubList);
    } catch (error) {
      console.error('Error al obtener la lista de clubes:', error);
    }
  };

  // Llamar a la función fetchClubs cuando el componente se monte
  useState(() => {
    fetchClubs();
  }, []);

  return (
    <div>
      <h2>Lista de Clubes</h2>
      <ul>
        {clubs.map(club => (
          <li key={club.id}>
            <h3>{club.nombre}</h3>
            <p>{club.descripcion}</p>
            <Link to={`/clubs/${club.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubList;

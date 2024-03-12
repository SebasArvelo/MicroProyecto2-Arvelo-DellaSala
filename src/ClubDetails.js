import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../firebase/firebase';

const ClubDetails = () => {
  const { clubId } = useParams();
  const [club, setClub] = useState(null);
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    // Función para obtener los detalles del club desde Firestore
    const fetchClubDetails = async () => {
      try {
        const clubRef = firebase.firestore().collection('clubs').doc(clubId);
        const doc = await clubRef.get();
        if (doc.exists) {
          setClub(doc.data());
        } else {
          console.log('No existe el club con el ID proporcionado.');
        }
      } catch (error) {
        console.error('Error al obtener los detalles del club:', error);
      }
    };

    fetchClubDetails();
  }, [clubId]);

  // Función para comprobar si el usuario es miembro del club
  const checkMembership = () => {
    // Aquí debes implementar la lógica para verificar si el usuario es miembro del club
    // Puedes usar Firebase Auth para obtener el usuario actual y consultar la base de datos para ver si está registrado en el club
    // Debes establecer el estado de isMember en consecuencia
  };

  // Función para unirse o salir del club
  const handleMembership = () => {
    // Aquí debes implementar la lógica para unirse o salir del club
    // Puedes usar Firebase Auth para obtener el usuario actual y Firebase Firestore para actualizar la membresía del usuario en el club
  };

  if (!club) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{club.nombre}</h2>
      <p>{club.descripcion}</p>
      <h3>Videojuegos del Club:</h3>
      <ul>
        {club.videojuegos.map(videojuegoId => (
          <li key={videojuegoId}>{/* Aquí debes mostrar los detalles de cada videojuego */}</li>
        ))}
      </ul>
      <button onClick={handleMembership}>{isMember ? 'Salir del Club' : 'Unirse al Club'}</button>
    </div>
  );
};

export default ClubDetails;

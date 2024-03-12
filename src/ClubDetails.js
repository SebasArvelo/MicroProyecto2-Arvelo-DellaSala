import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../firebase/firebase';

const ClubDetails = ({ user }) => {
  const { clubId } = useParams();
  const [club, setClub] = useState(null);
  const [member, setMember] = useState(false);

  useEffect(() => {
    const fetchClubDetails = async () => {
      const clubRef = firebase.firestore().collection('clubes').doc(clubId);
      const clubData = await clubRef.get();
      if (clubData.exists) {
        setClub({ id: clubData.id, ...clubData.data() });
      } else {
        console.log('Club not found');
      }
    };

    fetchClubDetails();
  }, [clubId]);

  useEffect(() => {
    if (user) {
      const membershipRef = firebase.firestore().collection('membresias')
        .where('clubId', '==', clubId)
        .where('userId', '==', user.uid);

      membershipRef.get().then((snapshot) => {
        if (!snapshot.empty) {
          setMember(true);
        }
      });
    }
  }, [clubId, user]);

  const handleMembership = () => {
    if (member) {
      // Remove membership
      firebase.firestore().collection('membresias')
        .where('clubId', '==', clubId)
        .where('userId', '==', user.uid)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            doc.ref.delete();
          });
          setMember(false);
        })
        .catch((error) => {
          console.error('Error removing membership: ', error);
        });
    } else {
      // Add membership
      firebase.firestore().collection('membresias').add({
        clubId,
        userId: user.uid,
      })
        .then(() => {
          setMember(true);
        })
        .catch((error) => {
          console.error('Error adding membership: ', error);
        });
    }
  };

  return (
    <div>
      {club && (
        <div>
          <h2>{club.nombre}</h2>
          <p>{club.descripcion}</p>
          <h3>Videojuegos</h3>
          <ul>
            {club.videojuegos.map((videojuegoId) => (
              <li key={videojuegoId}>{/* Renderizar información del videojuego */}</li>
            ))}
          </ul>
          {user && (
            <button onClick={handleMembership}>
              {member ? 'Retirarse del Club' : 'Unirse al Club'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ClubDetails;


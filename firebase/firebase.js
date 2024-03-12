// firebase/firebase.js

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhPei_FK8Cttgcw0mI-5WpNIIyCumgktA",
  authDomain: "microproyecto-arvelo-dellasala.firebaseapp.com",
  projectId: "microproyecto-arvelo-dellasala",
  // Agrega más configuraciones si es necesario
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();

export { auth, firestore };


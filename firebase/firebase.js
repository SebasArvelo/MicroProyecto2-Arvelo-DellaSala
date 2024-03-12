import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhPei_FK8Cttgcw0mI-5WpNIIyCumgktA",
  authDomain: "microproyecto-arvelo-dellasala.firebaseapp.com",
  projectId: "microproyecto-arvelo-dellasala",
  storageBucket: "microproyecto-arvelo-dellasala.appspot.com",
  messagingSenderId: "326870847729",
  appId: "1:326870847729:web:1d09c2d1465d4a389c1950"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;


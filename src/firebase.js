import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// If you're seeing this, please do not try to write to the database. 
// I was too busy to implement interaction with Firebase on server and I left it exposed, 
// hoping no one will be as bored and ill-wishing as to try and ruin the database.
// Do someting more productive instead. Thank you.

const firebaseConfig = {
    apiKey: "AIzaSyC6B4fnC3OuoS4x-eCx1a-6EY76ZpjW6fY",
      authDomain: "linkedin-cv-6f2bb.firebaseapp.com",
      projectId: "linkedin-cv-6f2bb",
      storageBucket: "linkedin-cv-6f2bb.appspot.com",
      messagingSenderId: "40356621978",
      appId: "1:40356621978:web:913e5c1b1e65cedd51b923",
      measurementId: "G-72LMRY9MHN"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
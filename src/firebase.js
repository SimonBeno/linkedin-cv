import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
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
//const auth = getAuth(firebaseApp);

/*
async function getCities(db) {
    const citiesCol = collection(db, 'posts');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList);
  }

getCities(db);
*/

export { db };


/*
const auth = getAuth(firebaseApp);
*/


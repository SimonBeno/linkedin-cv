import { db } from "./firebase.js";

async function fetchData() {
  const sampleCollectionRef = collection(db, "sampleCollection");
  const snapshot = await getDocs(sampleCollectionRef);
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log(data);
}

fetchData();
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBA_Qs6_Gwg_6JJizJwpwiCA61jwS4JDGc",
  authDomain: "clone-app-48ada.firebaseapp.com",
  projectId: "clone-app-48ada",
  storageBucket: "clone-app-48ada.appspot.com",
  messagingSenderId: "989322211205",
  appId: "1:989322211205:web:ded8fbd1e39846260e5eec",
  measurementId: "G-DM8FLC98F7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase;

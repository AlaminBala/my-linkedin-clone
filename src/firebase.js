import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCUYHghb49oFYqBlEZqnNR1bebMd4qiwUs",
  authDomain: "linkedin-clone-1eea0.firebaseapp.com",
  projectId: "linkedin-clone-1eea0",
  storageBucket: "linkedin-clone-1eea0.appspot.com",
  messagingSenderId: "481467836607",
  appId: "1:481467836607:web:857e91aa85fbbd87c83e0a",
  measurementId: "G-S9TSVS4S8J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

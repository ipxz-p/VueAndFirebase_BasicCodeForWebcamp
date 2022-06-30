import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'
const db = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

// Initialize Firebase
export default db;
export const firestore = db.firestore();
export const auth = db.auth();
export const facebook = new firebase.auth.FacebookAuthProvider;

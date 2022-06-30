import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'
const db = firebase.initializeApp({
  apiKey: "AIzaSyA8AsMT6HiuoriyNm4V7LWJT-HL8p02G0E",
  authDomain: "crud-fc706.firebaseapp.com",
  projectId: "crud-fc706",
  storageBucket: "crud-fc706.appspot.com",
  messagingSenderId: "774056859388",
  appId: "1:774056859388:web:bc757a6e5fde08ae50e979"
});

// Initialize Firebase
export default db;
export const firestore = db.firestore();
export const auth = db.auth();
export const facebook = new firebase.auth.FacebookAuthProvider;

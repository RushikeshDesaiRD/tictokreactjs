
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCXunVj2qT9_llK6tq6BHBMwS-NwY1gmb8",
  authDomain: "tiktok-b82a0.firebaseapp.com",
  databaseURL: "https://tiktok-b82a0.firebaseio.com",
  projectId: "tiktok-b82a0",
  storageBucket: "tiktok-b82a0.appspot.com",
  messagingSenderId: "229573534015",
  appId: "1:229573534015:web:049f0a1e4a910816fcf38a",
  measurementId: "G-S0PMDD3GYM"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
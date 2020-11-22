import firebase from "firebase/app";
import "firebase/database";

const API_KEY = process.env.REACT_APP_API_KEY;
const APP_ID = process.env.REACT_APP_APP_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "rog-timer.firebaseapp.com",
  databaseURL: "https://rog-timer.firebaseio.com",
  projectId: "rog-timer",
  storageBucket: "rog-timer.appspot.com",
  messagingSenderId: "49873760483",
  appId: APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

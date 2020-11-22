import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCIL3wflXSg5DD6keVzzNX47nTzOcOMV2A",
  authDomain: "rog-timer.firebaseapp.com",
  databaseURL: "https://rog-timer.firebaseio.com",
  projectId: "rog-timer",
  storageBucket: "rog-timer.appspot.com",
  messagingSenderId: "49873760483",
  appId: "1:49873760483:web:d11309f0f95ee78ab795d6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

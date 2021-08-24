// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxd3hD8eyfRmvkJ18_oxveYqcSmCcftfY",
  authDomain: "tiktok-clone-a4934.firebaseapp.com",
  projectId: "tiktok-clone-a4934",
  storageBucket: "tiktok-clone-a4934.appspot.com",
  messagingSenderId: "380124508394",
  appId: "1:380124508394:web:1adf0df21c51c9032ba793",
  measurementId: "G-01GRJVGYG9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

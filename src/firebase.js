import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDGCJKJtlmqPl6DX-cL6RHfe_9YmOCLeGI",
  authDomain: "instagram-react-js-clone.firebaseapp.com",
  databaseURL: "https://instagram-react-js-clone.firebaseio.com",
  projectId: "instagram-react-js-clone",
  storageBucket: "instagram-react-js-clone.appspot.com",
  messagingSenderId: "701168985231",
  appId: "1:701168985231:web:235aa9f54f6a64dcf0fcfa",
  measurementId: "G-JH095SVQFD",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

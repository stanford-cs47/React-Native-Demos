import * as firebase from 'firebase';
import 'firebase/firebase-firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCKd6GDihn1JOndnj35uK2cfUfnA3qy0Zs",
  authDomain: "cs47lecture8a.firebaseapp.com",
  databaseURL: "https://cs47lecture8a.firebaseio.com",
  projectId: "cs47lecture8a",
  storageBucket: "cs47lecture8a.appspot.com",
  messagingSenderId: "908096994778",
  appId: "1:908096994778:web:11c7303c1ce040e725d4e3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

export default firestore;
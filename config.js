import * as firebase from 'firebase'
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD5fdOv7GnXZDbxwRqZmWt3CRTQ2o623zY",
    authDomain: "wily-app-22c6f.firebaseapp.com",
    projectId: "wily-app-22c6f",
    storageBucket: "wily-app-22c6f.appspot.com",
    messagingSenderId: "713196605852",
    appId: "1:713196605852:web:29e7741eb1c56ecf9b7859"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
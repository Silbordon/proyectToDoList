  import firebase from 'firebase/app';
  import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBnOTyGyxiUevS1dWNvSjmedxT0msJogV0",
    authDomain: "todo-list-646b9.firebaseapp.com",
    projectId: "todo-list-646b9",
    storageBucket: "todo-list-646b9.appspot.com",
    messagingSenderId: "235274986043",
    appId: "1:235274986043:web:54791fd6183b1f68ef321e"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const bd = fb.firestore();
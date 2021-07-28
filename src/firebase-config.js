  import firebase from 'firebase/app';
  import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCpL0-2LiW9FP4qdvdyDkHi55OL6D9yocw",
    authDomain: "lista-tareas-82854.firebaseapp.com",
    projectId: "lista-tareas-82854",
    storageBucket: "lista-tareas-82854.appspot.com",
    messagingSenderId: "1061044930319",
    appId: "1:1061044930319:web:81d61d84cce263dd73207a"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const bd = fb.firestore();
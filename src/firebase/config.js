 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyATF9s4xoQNSge6ApCZA7hs7vZTeCIf4sg",
    authDomain: "a4-firearm.firebaseapp.com",
    databaseURL: "https://a4-firearm.firebaseio.com",
    projectId: "a4-firearm",
    storageBucket: "a4-firearm.appspot.com",
    messagingSenderId: "532066884486",
    appId: "1:532066884486:web:89c79a2481d46adbc16a07"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };
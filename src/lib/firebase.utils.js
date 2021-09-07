// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
// import firebase from "firebase";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {API_KEY} from '../key/api'


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "movie-app-216e1.firebaseapp.com",
    projectId: "movie-app-216e1",
    storageBucket: "movie-app-216e1.appspot.com",
    messagingSenderId: "312204621134",
    appId: "1:312204621134:web:cf56de8e925a35bf859a1f",
    measurementId: "G-XDNC4VCJPD",
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
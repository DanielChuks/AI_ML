import * as firebase from "firebase";

firebase.initializeApp({
  databaseURL: `https://mybukkadev.firebaseio.com`,
  apiKey: `AIzaSyCoR6BkOKnNKColE-e9V4aofpJcT3lCTyg`,
  authDomain: `mybukkadev.firebaseapp.com`,
  projectId: `mybukkadev`,
  storageBucket: `mybukkadev.appspot.com`,
  messagingSenderId: `786170534137`
});

export default firebase;

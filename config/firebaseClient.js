import * as firebase from "firebase";

firebase.initializeApp({
  databaseURL: `https://bukk-6c00c.firebaseio.com`,
  apiKey: `AIzaSyCf-MLZ_WvJylqChGo-2SDyXyxSIG33kmI`,
  authDomain: `bukk-6c00c.firebaseapp.com`,
  projectId: `bukk-6c00c`,
  storageBucket: `bukk-6c00c.appspot.com`,
  messagingSenderId: `781462262208`
});

export default firebase;

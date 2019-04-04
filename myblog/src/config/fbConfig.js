import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCgpPbmmwkLmmWmx52nOOGiQr0DTBc-GzM",
  authDomain: "my1st-myblog.firebaseapp.com",
  databaseURL: "https://my1st-myblog.firebaseio.com",
  projectId: "my1st-myblog",
  storageBucket: "my1st-myblog.appspot.com",
  messagingSenderId: "388735000667"
};
firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;

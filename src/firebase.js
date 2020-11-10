import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAfkLCNsVuMKdnxwbgMMERaLpOgrnTyOHQ",
  authDomain: "bug-recipe-pwa.firebaseapp.com",
  databaseURL: "https://bug-recipe-pwa.firebaseio.com",
  projectId: "bug-recipe-pwa",
  storageBucket: "bug-recipe-pwa.appspot.com",
  messagingSenderId: "429142203999",
  appId: "1:429142203999:web:849ecc4d5114a3d84b45ea",
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;

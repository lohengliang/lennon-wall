import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSZ3Ss88IfcRdcnlkjqTSpgrReUHWVqvc",
  authDomain: "lennon-wall-e66ee.firebaseapp.com",
  databaseURL: "https://lennon-wall-e66ee.firebaseio.com",
  projectId: "lennon-wall-e66ee",
  storageBucket: "lennon-wall-e66ee.appspot.com",
  messagingSenderId: "718657705641",
  appId: "1:718657705641:web:8e4d3aece0b5487a02bbb8",
  measurementId: "G-7SD13XNW3V"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

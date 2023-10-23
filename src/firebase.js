import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDISaX53EB16nXEIqejrqZAF7hL45QbJAQ",
  authDomain: "resume-builder2-730c9.firebaseapp.com",
  projectId: "resume-builder2-730c9",
  storageBucket: "resume-builder2-730c9.appspot.com",
  messagingSenderId: "677656788777",
  appId: "1:677656788777:web:0423e6ab59b433811d0138"
};

  firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  
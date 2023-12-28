import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8A0GUpBQfZSbDu4SHFHJEQk8hfJL6vPE",
  authDomain: "resume-builder3.firebaseapp.com",
  projectId: "resume-builder3",
  storageBucket: "resume-builder3.appspot.com",
  messagingSenderId: "1037471030467",
  appId: "1:1037471030467:web:37c9a77d9341313e781676"
};

  firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  
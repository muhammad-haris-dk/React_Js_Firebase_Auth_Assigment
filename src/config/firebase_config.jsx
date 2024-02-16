import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyByVYRgoLzbrdX-OieAu-qUxKW1_wKEzB0",
  authDomain: "react-auth-class.firebaseapp.com",
  projectId: "react-auth-class",
  storageBucket: "react-auth-class.appspot.com",
  messagingSenderId: "825351213621",
  appId: "1:825351213621:web:834fd40c1c8d6797bdd77c",
};

const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);
export { firebase_app,auth };

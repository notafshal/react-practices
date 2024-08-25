import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApc-Nvu_hJqJb91_Z6ofDxoVRki7qYWEo",
  authDomain: "blog-f118c.firebaseapp.com",
  projectId: "blog-f118c",
  storageBucket: "blog-f118c.appspot.com",
  messagingSenderId: "16809845557",
  appId: "1:16809845557:web:5c3be2fb6b2a661ae9e27c",
  measurementId: "G-CFTMGWY4RW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

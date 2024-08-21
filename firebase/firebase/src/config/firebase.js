import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3Bz9b1IK7Jp5wYfkzbe_QOd4xsb0S9FY",
  authDomain: "fir-course-c1b0c.firebaseapp.com",
  projectId: "fir-course-c1b0c",
  storageBucket: "fir-course-c1b0c.appspot.com",
  messagingSenderId: "72720657946",
  appId: "1:72720657946:web:dd634a798ef283f1422ba3",
  measurementId: "G-TTHCSJYFNS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

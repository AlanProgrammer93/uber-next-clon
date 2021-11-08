import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCNXARIzwLZVjXGX5u6Aza0aCCf1dsxRVg",
  authDomain: "ubernextclon.firebaseapp.com",
  projectId: "ubernextclon",
  storageBucket: "ubernextclon.appspot.com",
  messagingSenderId: "980719495391",
  appId: "1:980719495391:web:4e10c5d33f2657727e616a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
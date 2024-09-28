// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB295SKlQ9B4B5v42cpUs1-H0Fh4jg7jOE",
  authDomain: "review-app-f5428.firebaseapp.com",
  projectId: "review-app-f5428",
  storageBucket: "review-app-f5428.appspot.com",
  messagingSenderId: "987118234738",
  appId: "1:987118234738:web:34841df833824b4acea6eb",
  measurementId: "G-R5F3VVQG11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

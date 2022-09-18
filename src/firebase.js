// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlFKroYhkFX2UkzP7Xl3dL1WHjd6tpNwY",
  authDomain: "nidhi-studio.firebaseapp.com",
  projectId: "nidhi-studio",
  storageBucket: "nidhi-studio.appspot.com",
  messagingSenderId: "512374814645",
  appId: "1:512374814645:web:97a55ec2dfb91451554bfc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;

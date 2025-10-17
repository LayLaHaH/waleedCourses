// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";  // firestore from this package

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsh-BxjKuzeaeX6T9HZ-2aH94spfLoICU",
  authDomain: "waleed-services-0001.firebaseapp.com",
  projectId: "waleed-services-0001",
  storageBucket: "waleed-services-0001.firebasestorage.app",
  messagingSenderId: "357943719449",
  appId: "1:357943719449:web:44e2eb4605be519f55dc88",
  measurementId: "G-1S7ZPBTSZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // <-- CORRECT function

export { db };
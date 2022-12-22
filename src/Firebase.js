// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJweSWiMot1kIEi7rs_EmQgdnGg2U-w_o",
  authDomain: "mofijul-portfolio-37aae.firebaseapp.com",
  projectId: "mofijul-portfolio-37aae",
  storageBucket: "mofijul-portfolio-37aae.appspot.com",
  messagingSenderId: "130523797762",
  appId: "1:130523797762:web:ac586e206f4ad39c6f4a1b",
  measurementId: "G-VP5Q33NXFH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();

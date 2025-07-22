// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD3NZ_wo8FabiG4ITDq5sRLDQTevL6PCvU",
    authDomain: "email-launcher-3948d.firebaseapp.com",
    projectId: "email-launcher-3948d",
    storageBucket: "email-launcher-3948d.appspot.com",
    messagingSenderId: "149539073256",
    appId: "1:149539073256:web:d619568eeb712300566d5d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, getDoc, setDoc };

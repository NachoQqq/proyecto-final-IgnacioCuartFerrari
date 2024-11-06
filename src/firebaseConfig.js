// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC8cugmEC1PZ3yfYvCU2uFIWCsIyg9krqE",
    authDomain: "proyectoreactjscuartferrari.firebaseapp.com",
    projectId: "proyectoreactjscuartferrari",
    storageBucket: "proyectoreactjscuartferrari.firebasestorage.app",
    messagingSenderId: "710113024068",
    appId: "1:710113024068:web:ce0c724ddfac172f168411"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAOofPtSq-VyoNc0k7qYoxTfLlYWvPGzIU",
  authDomain: "movie-app-617a7.firebaseapp.com",
  projectId: "movie-app-617a7",
  storageBucket: "movie-app-617a7.firebasestorage.app",
  messagingSenderId: "761873624597",
  appId: "1:761873624597:web:f60accd77dc27bd814281c",
  measurementId: "G-EY4851QEMJ"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

export { firestore }; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDrIcn04gcETnBM_amR9wUzic6INSVvPu0",
    authDomain: "lab-10-recipe-manager.firebaseapp.com",
    projectId: "lab-10-recipe-manager",
    storageBucket: "lab-10-recipe-manager.firebasestorage.app",
    messagingSenderId: "467541332826",
    appId: "1:467541332826:web:e276693ca9d465e2c09963"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };

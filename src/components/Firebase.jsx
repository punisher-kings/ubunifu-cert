import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3xTD3r-oQDsNgP-nW1J2klJ2yt9M5lfY",
  authDomain: "ubunifu-2108c.firebaseapp.com",
  projectId: "ubunifu-2108c",
  storageBucket: "ubunifu-2108c.firebasestorage.app",
  messagingSenderId: "717327053357",
  appId: "1:717327053357:web:9a925823a2580bbe31fea4",
  measurementId: "G-9729F63CJ8",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { db, storage, auth };

// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 🔐 Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCfH2CRJ1-PNHpGh3nQTQhr7_W7UdUtcD0",
  authDomain: "driply-123.firebaseapp.com",
  projectId: "driply-123",
  storageBucket: "driply-123.firebasestorage.app",
  messagingSenderId: "567155902584",
  appId: "1:567155902584:web:83b81c5bb583ff2971458d",
  measurementId: "G-4S0Y68DCBD"
};

// 🔥 Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 🔧 Export Firebase Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

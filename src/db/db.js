
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbuY9flvR30rW_YraVl2yfNYV68phoH0Q",
  authDomain: "ecommerce-kanzo.firebaseapp.com",
  projectId: "ecommerce-kanzo",
  storageBucket: "ecommerce-kanzo.firebasestorage.app",
  messagingSenderId: "976250352204",
  appId: "1:976250352204:web:ef65f38c0064d814423ae9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db
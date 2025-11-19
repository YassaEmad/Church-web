// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARTFrQhZ4dkMxToe0DPNuTHBYFAs9oqlk",
  authDomain: "church-web-4b0c8.firebaseapp.com",
  projectId: "church-web-4b0c8",
  storageBucket: "church-web-4b0c8.firebasestorage.app",
  messagingSenderId: "754902137984",
  appId: "1:754902137984:web:115030d7f8bc8c008bfa65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

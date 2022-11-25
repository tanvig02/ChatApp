// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAih7nRG70Tsc_VzCIIV7gl4HVu1uMaTLQ",
  authDomain: "my-chat-app-3075e.firebaseapp.com",
  projectId: "my-chat-app-3075e",
  storageBucket: "my-chat-app-3075e.appspot.com",
  messagingSenderId: "209219809619",
  appId: "1:209219809619:web:17f3d4d0725a0477a5f1a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

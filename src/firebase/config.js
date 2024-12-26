import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAwZLtN7vJm4x2WhMFpu5mGiro6Uuk8iYo",
  authDomain: "mywebb2b.firebaseapp.com",
  projectId: "mywebb2b",
  storageBucket: "mywebb2b.firebasestorage.app",
  messagingSenderId: "380394475389",
  appId: "1:380394475389:web:405e75cb00c82c26288614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Export app for other uses
export default app;

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// ✅ Ensure Firebase is only initialized once
const firebaseConfig = {
  apiKey: 'AIzaSyBIoGLaBAx3RLaDjX7uEWr3ZVUpbQK7hTA',
  authDomain: 'hajj-and-umran-companion.firebaseapp.com',
  projectId: 'hajj-and-umran-companion',
  storageBucket: 'hajj-and-umran-companion.firebasestorage.app',
  messagingSenderId: '285964893267',
  appId: '1:285964893267:web:1cd5df2a7a86b9b0231aa6',
};

// ✅ Check if Firebase is already initialized
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

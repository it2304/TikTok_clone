// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPlTHzSAh5ze5S7SRg17Kw8rc7Z2Eii38",
  authDomain: "tiktok-clone-dfb1a.firebaseapp.com",
  projectId: "tiktok-clone-dfb1a",
  storageBucket: "tiktok-clone-dfb1a.firebasestorage.app",
  messagingSenderId: "505149225411",
  appId: "1:505149225411:web:b090ce6bcb5f7b92a16576",
  measurementId: "G-PDNXRW4VQP"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const analytics = getAnalytics(app);

export default db;

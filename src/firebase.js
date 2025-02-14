// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "ENTER_API_KEY",
  authDomain: "ENTER_AUTH_DOMAIN",
  projectId: "ENTER_YOUR_PROJECT_ID",
  storageBucket: "ENTER_STORAGE_BUCKET",
  messagingSenderId: "ENTER_MESSAGING_SENDER_ID",
  appId: "ENTER_APP_ID"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-state-20443.firebaseapp.com",
  projectId: "real-state-20443",
  storageBucket: "real-state-20443.appspot.com",
  messagingSenderId: "694971792008",
  appId: "1:694971792008:web:1d9072e1eeccb5fb357d3d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
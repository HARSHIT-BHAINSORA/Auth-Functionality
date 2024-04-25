// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzbkfs60jXr0dmAfK-zUzIu1-MBcYm3WI",
  authDomain: "auth-999f1.firebaseapp.com",
  projectId: "auth-999f1",
  storageBucket: "auth-999f1.appspot.com",
  messagingSenderId: "778011751317",
  appId: "1:778011751317:web:3ae6ab4dbed754c3e9fc9c",
  measurementId: "G-SPGX45P0HE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };

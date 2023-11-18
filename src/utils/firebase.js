// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-QgkWiFzSf-c1nQVR65VdxvgtLFSY248",
  authDomain: "ajudafortaleza-87e25.firebaseapp.com",
  projectId: "ajudafortaleza-87e25",
  storageBucket: "ajudafortaleza-87e25.appspot.com",
  messagingSenderId: "551944674458",
  appId: "1:551944674458:web:f64fd9624692b12ffa9323",
  measurementId: "G-47E210D9ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
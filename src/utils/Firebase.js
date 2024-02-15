// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa0FnUJBZPiUWdNdDYxQ3F1WkSC0TOO6g",
  authDomain: "alltube-fe4f7.firebaseapp.com",
  projectId: "alltube-fe4f7",
  storageBucket: "alltube-fe4f7.appspot.com",
  messagingSenderId: "803468371166",
  appId: "1:803468371166:web:41a7cd7140359af448ce4f",
  measurementId: "G-PJZMDSY24G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
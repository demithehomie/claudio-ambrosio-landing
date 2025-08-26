// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFoBIhZMduawH5MTU5CSNo12FwSgNXggo",
  authDomain: "dr-claudio-ambrosio.firebaseapp.com",
  projectId: "dr-claudio-ambrosio",
  storageBucket: "dr-claudio-ambrosio.firebasestorage.app",
  messagingSenderId: "769891431403",
  appId: "1:769891431403:web:c6763544ae034f8d0d5fae",
  measurementId: "G-6H0X126HMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
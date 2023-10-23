// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYZwNXknCX8nI4mNnhK9hl9Fe8AxZq9uE",
  authDomain: "blood-bank-app-82723.firebaseapp.com",
  databaseURL: "https://blood-bank-app-82723-default-rtdb.firebaseio.com",
  projectId: "blood-bank-app-82723",
  storageBucket: "blood-bank-app-82723.appspot.com",
  messagingSenderId: "221475599626",
  appId: "1:221475599626:web:521f79256ee9f6b26436f3",
  measurementId: "G-25PDBL7ZZQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkTgk6a-KFAYy0l6LeNxLZm02WMaUnDm8",
  authDomain: "workshopflitzfa.firebaseapp.com",
  projectId: "workshopflitzfa",
  storageBucket: "workshopflitzfa.appspot.com",
  messagingSenderId: "341845886435",
  appId: "1:341845886435:web:15eaa2dbfcc7053393ccd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  /* </React.StrictMode> */
);

// import  { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBId5U1T4OoFLJuOJ4MhgKdsiS8gMwjyVQ",
  authDomain: "admin-panel-e3cb8.firebaseapp.com",
  projectId: "admin-panel-e3cb8",
  storageBucket: "admin-panel-e3cb8.appspot.com",
  messagingSenderId: "635372671460",
  appId: "1:635372671460:web:8d0146f5439feae52177f1",
  measurementId: "G-V9GXXYCWY2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <App />,
  // </StrictMode>,
);

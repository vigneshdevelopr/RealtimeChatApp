import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDM6nrJN053I-scCdB2s1Ci1Rex_EXGbZs",
  authDomain: "realchat-app-7c030.firebaseapp.com",
  projectId: "realchat-app-7c030",
  storageBucket: "realchat-app-7c030.appspot.com",
  messagingSenderId: "795693258131",
  appId: "1:795693258131:web:92becc721e4a684b6b0466",
  measurementId: "G-JDPEN537VM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, provider };

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeJb7Gv-h9Xl2lgyXTZMLgh8B8NFtDeb4",
  authDomain: "project-5-mp3.firebaseapp.com",
  databaseURL: "https://project-5-mp3-default-rtdb.firebaseio.com",
  projectId: "project-5-mp3",
  storageBucket: "project-5-mp3.appspot.com",
  messagingSenderId: "1044765737870",
  appId: "1:1044765737870:web:6b100197ef2d677e895adf"
};


const app = initializeApp(firebaseConfig);
const dbFirebase = getDatabase(app);
const authFirebase = getAuth(app);

export { dbFirebase, authFirebase };
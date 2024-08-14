// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAncgBT-6Mbm7U-d4pS_EcB9bmNMT4eiyY",
  authDomain: "linkage-files.firebaseapp.com",
  projectId: "linkage-files",
  storageBucket: "linkage-files.appspot.com",
  messagingSenderId: "373179860871",
  appId: "1:373179860871:web:4185ff590bde98c6257522",
  measurementId: "G-K2QYW93HF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Storage  = getStorage(app);

export default Storage;
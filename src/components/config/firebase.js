// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const authDomain = process.env.REACT_APP_API_URL;
const appId = process.env.REACT_APP_appId;
const messagingSenderId = process.env.REACT_APP_messagingSenderId;
const APIKEY = process.env.REACT_APP_APIKEY;
const storageBucket = process.env.REACT_APP_storageBucket;
const measurementId = process.env.REACT_APP_measurementId;
const projectId = process.env.REACT_APP_projectId;

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: authDomain,
  projectId: "linkage-files",
  storageBucket:storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Storage  = getStorage(app);

export default Storage;
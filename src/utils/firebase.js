// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY2vTiBnQdnNyLitxyCIPxk9XF68kjoos",
  authDomain: "netflixgpt-907df.firebaseapp.com",
  projectId: "netflixgpt-907df",
  storageBucket: "netflixgpt-907df.appspot.com",
  messagingSenderId: "625120726031",
  appId: "1:625120726031:web:94a2fae797f3cd3b50277a",
  measurementId: "G-XGQVK8HYSL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth=getAuth();

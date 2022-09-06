import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvKF8TlSfthpqD71IM7qCl7wUEUES_628",
  authDomain: "twitter-clone-69de1.firebaseapp.com",
  projectId: "twitter-clone-69de1",
  storageBucket: "twitter-clone-69de1.appspot.com",
  messagingSenderId: "1609255382",
  appId: "1:1609255382:web:cf065f84302cb35206bc77"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(); 

export const provider = new GoogleAuthProvider();


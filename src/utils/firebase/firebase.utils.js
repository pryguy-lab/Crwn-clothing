import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiwjBcLI9vU3_WuSb2J4AjhQC3GXEKRd0",
  authDomain: "crwn-clothing-db-dd260.firebaseapp.com",
  projectId: "crwn-clothing-db-dd260",
  storageBucket: "crwn-clothing-db-dd260.appspot.com",
  messagingSenderId: "900502129337",
  appId: "1:900502129337:web:13bc31e18877d8b1132968",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithgooglePopup = () => signInWithPopup(auth, provider);

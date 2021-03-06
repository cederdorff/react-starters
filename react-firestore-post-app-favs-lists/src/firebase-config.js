import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBAOu3NqaUza7vzDQli9dYRaUHwLZldiWw",
    authDomain: "race-react-firebase.firebaseapp.com",
    projectId: "race-react-firebase",
    storageBucket: "race-react-firebase.appspot.com",
    messagingSenderId: "2118672388",
    appId: "1:2118672388:web:06a1d58d898e9702581551"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const usersRef = collection(db, "users");
export const postsRef = collection(db, "posts");
export const favsRef = collection(db, "favorites");

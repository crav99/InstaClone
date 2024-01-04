import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCo32FWz4JR9SPq8nfYoz-BxVwNrchE6mg",
  authDomain: "instaclone-f9a56.firebaseapp.com",
  projectId: "instaclone-f9a56",
  storageBucket: "instaclone-f9a56.appspot.com",
  messagingSenderId: "984314868717",
  appId: "1:984314868717:web:7e32003984b7d9945cade4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

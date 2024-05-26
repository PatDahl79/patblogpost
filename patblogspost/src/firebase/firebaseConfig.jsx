import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAfa-8Dmp7obg4x7Ltt2m_tQuIkTkFTmiA",
  authDomain: "blogsposts-bad10.firebaseapp.com",
  projectId: "blogsposts-bad10",
  storageBucket: "blogsposts-bad10.appspot.com",
  messagingSenderId: "446461433014",
  appId: "1:446461433014:web:2e21022007b8efec888217"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDB, auth, storage };

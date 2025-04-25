import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7ePRVQgPgc3YFtPLn9hFrK4GizLrHVX0",
  authDomain: "twitter-87949.firebaseapp.com",
  projectId: "twitter-87949",
  storageBucket: "twitter-87949.firebasestorage.app",
  messagingSenderId: "816306908394",
  appId: "1:816306908394:web:5126b0832c440e343afb93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//google saglayıcısının kurulumu
export const google=new GoogleAuthProvider();
// auth referansını al
export const auth=getAuth(app);

// veritabanın referansını al
export const db=getFirestore(app);
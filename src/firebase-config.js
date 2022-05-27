import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 코드 추가
import { getFirestore } from "firebase/firestore"; // 코드 추가
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZqixqRJGWpBext2DJi9WYTuUPUnXRZRY",
  authDomain: "lunker-2ad78.firebaseapp.com",
  projectId: "lunker-2ad78",
  storageBucket: "lunker-2ad78.appspot.com",
  messagingSenderId: "392814960713",
  appId: "1:392814960713:web:4ae5fbbec8e3a10307df98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireStore = getFirestore(app);

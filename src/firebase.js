// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp-L3fQOUtkXTIMHwjOeuAlfwOcQ3pGIk",
  authDomain: "realtor-clone-practice-91b72.firebaseapp.com",
  projectId: "realtor-clone-practice-91b72",
  storageBucket: "realtor-clone-practice-91b72.appspot.com",
  messagingSenderId: "282948391077",
  appId: "1:282948391077:web:9ca1127c7f7e52bc13fd4c",
  measurementId: "G-68LT7K0L8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db =  getFirestore()
// Import the functions you need from the SDKs you nee
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore'; 
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmFVDT4bQhhvD3HIDo7j-Yx1GzsK8AUkQ",
    authDomain: "caladrius-tech-a-thon.firebaseapp.com",
    projectId: "caladrius-tech-a-thon",
    storageBucket: "caladrius-tech-a-thon.appspot.com",
    messagingSenderId: "611043656305",
    appId: "1:611043656305:web:e74afd67de4fe9b1ac11d0"
  };


export const app = firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();

// const firestore = firebase.firestore();
export const db= getFirestore(app);

// export const database = {
//    admin: firestore.collection('admin'),
//   //  users : firestore.collection('users'),
// }

// export const storage =firebase.storage();

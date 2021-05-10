import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyABQj7fFPZ90nREemTDvYvLsdHYXofjktU",
    authDomain: "dear-diary-kasun.firebaseapp.com",
    projectId: "dear-diary-kasun",
    storageBucket: "dear-diary-kasun.appspot.com",
    messagingSenderId: "81462879322",
    appId: "1:81462879322:web:8847f3e04b065d33ba2463",
    measurementId: "G-RRBJ7VK9TV"
  };

const fb = firebase.initializeApp(firebaseConfig);

export default fb
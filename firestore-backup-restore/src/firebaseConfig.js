// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAzQ7vK3qggbi-Yam2SHV_WapeV18WUxSE",
    authDomain: "privepay-7bb8c.firebaseapp.com",
    databaseURL: "https://privepay-7bb8c-default-rtdb.firebaseio.com",
    projectId: "privepay-7bb8c",
    storageBucket: "privepay-7bb8c.appspot.com",
    messagingSenderId: "884289053301",
    appId: "1:884289053301:web:11036287c595c54f814e3c",
    measurementId: "G-HJDNM2MJ2S"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

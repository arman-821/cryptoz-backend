// src/Restore.js
import React, { useEffect, useState } from 'react';
import {initializeApp} from 'firebase/app';
import { getFirestore, writeBatch,doc } from 'firebase/firestore';
import 'firebase/firestore';
import {getAuth, RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth';
import { db as oldDb } from './firebaseConfig';
import FileSaver from 'file-saver';

const firebaseConfig = {
    apiKey: "AIzaSyC3fYFsbaiCKSzwx9sHsIR0sEXy7YLjj3A",
    authDomain: "privepay-7bca4.firebaseapp.com",
    projectId: "privepay-7bca4",
    storageBucket: "privepay-7bca4.appspot.com",
    messagingSenderId: "27629461190",
    appId: "1:27629461190:web:ad3ba396eb8056d429c1c7",
    measurementId: "G-J6JXFR82LW"
  };

const restoreApp = initializeApp(firebaseConfig, "restoreApp");
const restoreDb = getFirestore(restoreApp);

const Restore = () => {
  const [collectionName, setCollectionName] = useState('');
  const [file, setFile] = useState(null);
const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
const [confirmationResult, setConfirmationResult] = useState(null);
const [otp, setOtp] = useState('');
const [phoneNumber, setPhoneNumber] = useState('+918759707818');
const [message, setMessage] = useState('');
const [user, setUser] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const [code, setCode] = useState('');
const [verificationId, setVerificationId] = useState('');
const [confirm, setConfirm] = useState(null);


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleRestore = async () => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = JSON.parse(e.target.result);
      const batch = writeBatch(restoreDb);
      data.forEach(docsa => {
        const docRef = doc(restoreDb, collectionName, docsa.id);
        batch.set(docRef, docsa);
      });
      await batch.commit();
      alert('Data restored successfully');
    };
    reader.readAsText(file);
  };
  useEffect(() => {
   
  }, []);

const sendOtp=async()=>{
    try {
        const auth = getAuth(restoreApp);
        const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
        setConfirmationResult(confirmationResult);
    }
    catch (error) {
        console.log(error);
    }
}

  return (
    <div>
      <h1>Restore Firestore Collection</h1>
      <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <button onClick={sendOtp}>Send OTP</button>

      <div className='recaptcha-container' id="recaptcha-container"></div>

      {/* <input
        type="text"
        placeholder="Collection Name"
        value={collectionName}
        onChange={(e) => setCollectionName(e.target.value)}
      />
      <input type="file" onChange={handleFileChange} /> */}
            <button onClick={sendOtp}>Restore</button>

    </div>
  );
};

export default Restore;

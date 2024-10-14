import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyC3fYFsbaiCKSzwx9sHsIR0sEXy7YLjj3A",
    authDomain: "privepay-7bca4.firebaseapp.com",
    projectId: "privepay-7bca4",
    storageBucket: "privepay-7bca4.appspot.com",
    messagingSenderId: "27629461190",
    appId: "1:27629461190:web:ad3ba396eb8056d429c1c7",
    measurementId: "G-J6JXFR82LW"
  };
  const firebaseApp=initializeApp(firebaseConfig);
  const auth=getAuth(firebaseApp);
  const [confirm, setConfirm] = useState(null);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
useEffect(() => {
  window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
}
, [])
  return (
    <div>
      {
        !otpSent ? 
        <>
        <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button onClick={async () => {
          const recaptchaVerifier = window.recaptchaVerifier ;

          const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
          setConfirm(confirmationResult);
          setOtpSent(true);
        }}>Send OTP</button>
        <div id="recaptcha-container"></div>
        </>
        :
        <>
        <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
        <button onClick={async () => {
          try {
            await confirm.confirm(otp);
            alert('Phone number verified');
          } catch (error) {
            alert('Invalid OTP');
          }
        }}>Verify OTP</button>


        </>
      }
      
    </div>
  )
}

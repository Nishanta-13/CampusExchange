
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBaGb5rDDb3VxN8NoqzyhOHS4-Ovohnrqc",
  authDomain: "campusexchange-9cd96.firebaseapp.com",
  projectId: "campusexchange-9cd96",
  storageBucket: "campusexchange-9cd96.firebasestorage.app",
  messagingSenderId: "751603000832",
  appId: "1:751603000832:web:9e54a50f2b709a40bbdae5",
  measurementId: "G-KZQ4FSK6TW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
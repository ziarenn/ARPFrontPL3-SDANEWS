import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA0mkGnkm3LbPdl73mkN2EpXHV775ppppw",
  authDomain: "sda-news-5408b.firebaseapp.com",
  projectId: "sda-news-5408b",
  storageBucket: "gs://sda-news-5408b.appspot.com",
  messagingSenderId: "508004677711",
  appId: "1:508004677711:web:16b8a69d101c3bf698d23a",
  measurementId: "G-M33V789KNS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

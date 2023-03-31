import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7shq2jhXTTQBN6EW_MCVDWf8lH-fsoGM",
  authDomain: "chat-f8fb0.firebaseapp.com",
  projectId: "chat-f8fb0",
  storageBucket: "chat-f8fb0.appspot.com",
  messagingSenderId: "90993005430",
  appId: "1:90993005430:web:031b0b9141fc2377986057",
  measurementId: "G-HQWP5DMP4X",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

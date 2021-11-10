
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyAtCmd_KQp67u1DAwGvldNLk7tIpLVTEn4",
    authDomain: "miel-bavio.firebaseapp.com",
    projectId: "miel-bavio",
    storageBucket: "miel-bavio.appspot.com",
    messagingSenderId: "516134051228",
    appId: "1:516134051228:web:aedb101c92d64cb6a8bc59"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
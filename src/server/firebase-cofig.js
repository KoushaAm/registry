import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBnlzzCYWRiAjiK457_r1VdmLj3JIuxsPM",
    authDomain: "registry-d5e47.firebaseapp.com",
    projectId: "registry-d5e47",
    storageBucket: "registry-d5e47.appspot.com",
    messagingSenderId: "906857724392",
    appId: "1:906857724392:web:96d6442a880eac66f74c5d",
    measurementId: "G-1HLKT485ZJ"
};

// adding environment variables allows this information to be secret


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

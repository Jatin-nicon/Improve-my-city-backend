// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhSevotEkqXEB9-O3BQlZ60Bd3TDHEwcM",
    authDomain: "improve-my-city-e9860.firebaseapp.com",
    projectId: "improve-my-city-e9860",
    storageBucket: "improve-my-city-e9860.firebasestorage.app",
    messagingSenderId: "114720030758",
    appId: "1:114720030758:web:3a5387539d1cf8ce0066e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };

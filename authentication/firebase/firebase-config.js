// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvAmcq4X9yb2hQLBkcwJb1DYtzw1oJ1WU",
  authDomain: "gurukilli-6313f.firebaseapp.com",
  projectId: "gurukilli-6313f",
  storageBucket: "gurukilli-6313f.firebasestorage.app",
  messagingSenderId: "282056001546",
  appId: "1:282056001546:web:0c13a8ec780bf1b3ddb7f3",
  measurementId: "G-GP4NZD052L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Enable Persistent Login (Fixes Auto Logout Issue)
setPersistence(auth, browserLocalPersistence)
    .then(() => {
        console.log("✅ Persistence Enabled: Users stay logged in even after navigating back.");
    })
    .catch((error) => {
        console.error("❌ Error enabling persistence:", error);
    });

export { auth };

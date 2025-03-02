import { auth } from "./firebase-config.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendEmailVerification, 
    sendPasswordResetEmail,
    signOut, 
    onAuthStateChanged, 
    deleteUser
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Select form elements
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
const logoutBtn = document.getElementById("logoutBtn");

// ✅ Keep Users Logged In on Page Load
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("✅ User is logged in:", user.email);
        // Stay on the same page if logged in
    } else {
        console.log("❌ No user found, redirecting to login...");
        window.location.href = "register.html"; // Redirect to login page
    }
});

// ✅ Handle Registration (Sign-Up)
if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // ✅ Send Email Verification
                sendEmailVerification(user)
                    .then(() => {
                        alert("A verification email has been sent. Please verify your email before logging in.");
                    })
                    .catch((error) => {
                        alert("Error sending verification email: " + error.message);
                    });
            })
            .catch((error) => {
                alert("Registration Error: " + error.message);
            });
    });
}

// ✅ Handle Login
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // ✅ Check if the user is verified
                if (user.emailVerified) {
                    alert("✅ Login successful!");
                    window.location.href = "/subjectss.html"; // Redirect to dashboard
                } else {
                    alert("❌ Your email is not verified. Please check your inbox.");
                }
            })
            .catch((error) => {
                alert("❌ Login Error: " + error.message);
            });
    });
}

// ✅ Handle Logout (No More Auto Logout)
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        signOut(auth)
            .then(() => {
                alert("✅ Logged out successfully!");
                window.location.href = "register.html"; // Redirect to login page
            })
            .catch((error) => {
                alert("❌ Logout Error: " + error.message);
            });
    });
}

// ✅ Handle Forgot Password
const forgotPasswordLink = document.getElementById("forgotPasswordLink");

if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", (e) => {
        e.preventDefault();
        const email = prompt("Enter your email to reset your password:");
        
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("✅ A password reset email has been sent.");
                })
                .catch((error) => {
                    alert("❌ Error resetting password: " + error.message);
                });
        }
    });
}

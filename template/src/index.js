// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';


// https://firebase.google.com/docs/web/setup#available-libraries
// window.onload = auth.signOut()


// window.onabort = function(){
//     //use fetch
//     fetch('http://localhost:5555/sessionLogout/')
// }

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8oMtNsfBn7MsmxiXDoMRwUtOk-1RtJcY",
    authDomain: "unccoviddashbo.firebaseapp.com",
    projectId: "unccoviddashbo",
    storageBucket: "unccoviddashbo.appspot.com",
    messagingSenderId: "490384167179",
    appId: "1:490384167179:web:1adf521a2c46a110e8d20e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// window.onabort(app.delete())
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    // ...
  } else {
    // User is signed out
    // ...
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
  if (user != null) {
    console.log("User Logged In");
  }
  else {
    console.log("No user");
  }
});


window.login = function() {

  var userEmail = document.getElementById("email_login").value;
  var userPass = document.getElementById("password_login").value;

  signInWithEmailAndPassword(auth, userEmail, userPass)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      location.href = '/main.html';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });


};

window.goToPage = function(){
    location.href = '/main.html'
}

window.goToSignup = function(){
    location.href = '/signup.html'
}

window.signin = function() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  createUserWithEmailAndPassword(auth, userEmail, userPass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

};

window.logout = function() {
  auth.signOut();
  location.href = '/index.html'
};




// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

// Bring in user db
const user_db = require('../../database/userlog_db')
//import log from '../../middleware/user_middleware'

// https://firebase.google.com/docs/web/setup#available-libraries

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

    let userhistory = {email: userEmail, time: Date.now()}

    const stmt = db.prepare('INSERT INTO userlog (email, time) VALUES (?, ?)')
    const info = stmt.run(userhistory.email, userhistory.time)
};

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

  let userdata = {email: userEmail, password: userPass}
  let userhistory = {email: userEmail, time: Date.now()}

  let stmt = user_db.prepare("SELECT * FROM userlog WHERE email = ?")
  let info = stmt.get(userhistory.email)

  if (typeof info == "undefined") {
    stmt2 = user_db.prepare("INSERT INTO userlog (email, password) VALUES (?, ?)")
    info2 = stmt2.run(userdata.userEmail, userdata.userPass)
  }

  stmt = user_db.prepare('INSERT INTO userhistory (email, time) VALUES (?, ?)')
  info = stmt.run(userhistory.email, userhistory.time)

};

window.logout = function() {
  auth.signOut();
};





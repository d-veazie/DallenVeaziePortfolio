  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCTzdlG92qed3YmS5dj7Ozmybr1tvSS7Ms",
    authDomain: "portfolio-info-tracker.firebaseapp.com",
    databaseURL: "https://portfolio-info-tracker.firebaseio.com",
    projectId: "portfolio-info-tracker",
    storageBucket: "",
    messagingSenderId: "322570416277",
    appId: "1:322570416277:web:9939d82bab3d7c2b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // firebase functions in order to track submitted form data

  let messagesRef = firebase.database().ref('messages');


let form = document.getElementById("name-form");
form.onsubmit = function (e) {
    e.preventDefault(); 
    let name = form.name.value;
    let email = form.email.value;
    let message = form.message.value;

console.log(name);
console.log(email);
console.log(message);

saveMessage(name, email, message);

document.querySelector('.alert').style.display = 'block';

setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
}, 5000);

form.reset();
}

function saveMessage(name, email, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name, 
        email: email,
        message: message,
    });
}


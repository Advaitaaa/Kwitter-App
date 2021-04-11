
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAIqvZFwrvRmoURXS3HdFhWL2uOevFmwmg",
      authDomain: "kwitter-app-cc85d.firebaseapp.com",
      databaseURL: "https://kwitter-app-cc85d-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-cc85d",
      storageBucket: "kwitter-app-cc85d.appspot.com",
      messagingSenderId: "137911779993",
      appId: "1:137911779993:web:850fa163dc2479d17fae08"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

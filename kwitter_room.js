
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBydUXKfsssfeBeWEprRXcAn64qhxmx7c4",
      authDomain: "elijah-hdny.firebaseapp.com",
      databaseURL: "https://elijah-hdny-default-rtdb.firebaseio.com",
      projectId: "elijah-hdny",
      storageBucket: "elijah-hdny.appspot.com",
      messagingSenderId: "58551467005",
      appId: "1:58551467005:web:46ac305da39472554e7794"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_name);
      row = "<div class'room_name' id"+Room_name+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;      
      //End code
      });});}
getData();






User_name = localStorage.getItem("user_name"); 
document.getElementById("username").innerHTML = "Welcome " + User_name + "!";


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class'user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class'message_h4'>"+ message +"</h4>";
like_button = "<button class'btn btn-warning' id="+firebase_message_id+" value="+like" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+Like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML = row;

}
//End code
      } });  }); }
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name:user_name, message:msg, like:0});
      document.getElementById("msg").value = "";
}



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
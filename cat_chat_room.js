var firebaseConfig = {
  apiKey: "AIzaSyCtx3TJ97kB9ZZFpK0AU48WSGIfk2xUOMM",
  authDomain: "cat-chat-rooms-unu.firebaseapp.com",
  projectId: "cat-chat-rooms-unu",
  storageBucket: "cat-chat-rooms-unu.appspot.com",
  messagingSenderId: "383398976279",
  appId: "1:383398976279:web:d7cf8a5f3128cc4a4a3552"
};

firebase.initializeApp(firebaseConfig);

cat_name=localStorage.getItem("cat_name");
document.getElementById("cat_name").innerHTML = "Hello " + cat_name + "!~"; 

function addRoom() { 
  cat_chat_room_name = document.getElementById("cat_chat_room_name").value; 
  firebase.database().ref("/").child(cat_chat_room_name).update({ purpose : "adding room name" }); 
  localStorage.setItem("cat_chat_room_name", cat_chat_room_name); 
  window.location = "cc_msg_page.html"; 
}

function getData() {
  firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    console.log("Cat Room Name - " + cat_chat_room_name); 
    row = "<div class='cat_chat_room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ cat_chat_room_name +"</div><hr>";
    document.getElementById("output").innerHTML += row;
});});}
getData();

function redirectToRoomName(name) {
  console.log(name); 
  localStorage.setItem("cat_chat_room_name", name); 
  window.location = "cc_msg_page.html"; }

  function logOut(){
    localStorage.removeItem("cat_name");
    localStorage.removeItem("cat_chat_room_name");
    window.location="cat_chat.html";
}
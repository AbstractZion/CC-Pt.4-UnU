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
cat_chat_name=localStorage.getItem("cat_chat_room_name");

function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(cat_chat_room_name).push({
        name:cat_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value=" ";
}

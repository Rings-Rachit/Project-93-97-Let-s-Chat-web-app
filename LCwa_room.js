var firebaseConfig = {
    apiKey: "AIzaSyC-zM3R8nU3KAP0F67q7WYte81MW33DaxQ",
    authDomain: "projec-93-7-let-s-chat-web-app.firebaseapp.com",
    projectId: "projec-93-7-let-s-chat-web-app",
    storageBucket: "projec-93-7-let-s-chat-web-app.appspot.com",
    messagingSenderId: "505006594181",
    appId: "1:505006594181:web:d011dcd4ec33a641dfb1ec"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

 function putname()
 {
   name_of_user=  localStorage.getItem("user_name");
 document.getElementById("welcomeuser").innerHTML = name_of_user;
 }
 function addRoom() 
{
  
}

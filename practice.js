

var firebaseConfig = {
  apiKey: "AIzaSyC46oPVqDiBTu4pLoNTqNJvi_Vn0qU5kfU",
  authDomain: "practice-4b3a3.firebaseapp.com",
  projectId: "practice-4b3a3",
  storageBucket: "practice-4b3a3.appspot.com",
  messagingSenderId: "106969762301",
  appId: "1:106969762301:web:0e0a3d3819594af1bb7194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function adduser()
{
    user_name = document.getElementById ("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
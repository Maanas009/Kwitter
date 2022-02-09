//YOUR FIREBASE LINKS

const firebaseConfig = {
      apiKey: "AIzaSyD7kjw-py5Ipoq2Kzni7k-nZdyDtG8XF44",
      authDomain: "notmiliea.firebaseapp.com",
      databaseURL: "https://notmiliea-default-rtdb.firebaseio.com",
      projectId: "notmiliea",
      storageBucket: "notmiliea.appspot.com",
      messagingSenderId: "1097997526432",
      appId: "1:1097997526432:web:5001b9e5e2ce28e20030c5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                      name: user_name, 
                      message: msg, 
                      like: 0
                });
          document.getElementById("msg").value = "";
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(message_data);
console.log(firebase_message_id);

name = message_data["name"];
like = message_data["like"];
message = message_data["message"];

name_with_tag = "<h4>" + name + "<img class = 'user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-success' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span> </button> <hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("Clicked on the like button for" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes

      });
}




function logout()
{
      localStorage.removeItem('user_name');
      localStorage.removeItem('room_name');
      window.location = "index.html";
}
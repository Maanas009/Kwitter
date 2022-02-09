
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

    username = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update(
                {
                      purpose: "adding room name"
                }
          );
          console.log("Hello");
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room names " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+"onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById('output').innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

function logout()
{
      localStorage.removeItem('user_name');
      localStorage.removeItem('room_name');
      window.location = "index.html";
}
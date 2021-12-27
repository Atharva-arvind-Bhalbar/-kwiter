const firebaseConfig = {
      apiKey: "AIzaSyDKtQYnEuEXRyt7o-B71LNfnryREJBHLQo",
      authDomain: "chat-with-us-15b2d.firebaseapp.com",
      projectId: "chat-with-us-15b2d",
      storageBucket: "chat-with-us-15b2d.appspot.com",
      messagingSenderId: "65774873051",
      appId: "1:65774873051:web:89c5ea3fd143593611dffe"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

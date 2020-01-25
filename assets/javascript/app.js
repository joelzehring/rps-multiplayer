$(document).ready(function() {

// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDn0gfVo35Hykn_yBmydtuA7F07DJKVx54",
  authDomain: "rps-multiplayer-8ed0a.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-8ed0a.firebaseio.com",
  projectId: "rps-multiplayer-8ed0a",
  storageBucket: "rps-multiplayer-8ed0a.appspot.com",
  messagingSenderId: "138756957513",
  appId: "1:138756957513:web:613f202078689acdcae698"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var state = {
  gameCount: 0,
  p1: {
    loggedIn: false,
    name: "",
    armed: false,
    weapon: "",
    wins: 0,
    losses: 0,
    draws: 0,
  },
  p2: {
    loggedIn: false,
    name: "",
    armed: false,
    weapon: "",
    wins: 0,
    losses: 0,
    draws: 0,
  }
}

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

function newGame() {
  $("#instructions").text("Enter a name.");
  $("input").hide();
  $(".btn-weapon-select").hide();

  state = {
    gameCount: 0,
    p1: {
        loggedIn: false,
        name: "",
        armed: false,
        weapon: "",
        wins: 0,
        losses: 0,
        draws: 0,
    },
    p2: {
        loggedIn: false,
        name: "",
        armed: false,
        weapon: "",
        wins: 0,
        losses: 0,
        draws: 0,
    }
}
}

function playerEnterName() {
  
  var display = $(this).children("label");
  var input = $(this).children("input");
  display.hide();
  input.show();
  
  // Update the username text as the user enters input
  input.change( function() {
    display.text(input.val());
  });

  // display the entered user name when the Enter key is pressed
  $(this).submit( function(e) {
    e.preventDefault();
    input.hide();
    display.show();
    $(this).parent().siblings(".btn-weapon-select").show();
  });

  // display the entered user name when the input field loses focus
  input.focusout( function() {
    input.hide();
    display.show();
    $(this).parent().siblings(".btn-weapon-select").show();
  });
     
}

function newRound(){


}

function weaponSelect() {
  var userChoice = $(this).attr("data-weapon");
  $(this).siblings(".player-img").attr("alt",userChoice);
}

newGame();

// p1 loads page

// p2 loads page

// p1 enters name

// p2 enters name

// p1 selects weapon button

// p2 selects weapon button

// p1 sees battle result

// p2 sees battle result

// state in firebase to newGame values swhen session ends

// Global listeners
$(document).on("click","form",playerEnterName);
$(document).on("click",".btn-weapon-select",weaponSelect);

}); // jQuery end
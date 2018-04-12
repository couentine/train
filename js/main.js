var config = {
  apiKey: "AIzaSyBcZRba6aadBrMpj0lDSY_yqypPYBLyu8I",
  authDomain: "train-f4c40.firebaseapp.com",
  databaseURL: "https://train-f4c40.firebaseio.com",
  projectId: "train-f4c40",
  storageBucket: "train-f4c40.appspot.com",
  messagingSenderId: "893780540235"
};
firebase.initializeApp(config);


var database = firebase.database();

var name = "";
var destination = "";
var time= "";
var frequency = "";
var minAway = "";



//   ==========================================

$("#add-train").on("click", function(event) {

	event.preventDefault();

	name = $("#train-input").val().trim();
	destination = $("#destination-input").val().trim();
	time = $("#time-input").val().trim();
	frequency = $("#frequency-input").val().trim();


  var d = new Date();
console.log(d)

var timedif = d.getHours()+":"+d.getMinutes();
    console.log(timedif)

	database.ref().push({
		trainName: name,
		trainDestination: destination,
		trainTime: time,
		trainFrequency: frequency,
    timer:timedif
	});

});


database.ref().on("child_added", function(snapshot) {

	var sv = snapshot.val();

	$("#train-list").append("<tr><td>" + snapshot.val().trainName +
	      	"</td><td>" + snapshot.val().trainDestination +
	      	"</td><td>" + snapshot.val().trainFrequency +
	      	"</td><td>" + snapshot.val().trainTime+
          "</td><td>" + snapshot.val().timer
		);

    }, function(errorObject) {
    	console.log("Errors handled: " + errorObject.code);


});

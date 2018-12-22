// Initialize Firebase
var config = {
    apiKey: "AIzaSyD01LCGzOLJ1gB1Zn3SgZaoxJb1LZTvZsE",
    authDomain: "trainstuff-7a5b9.firebaseapp.com",
    databaseURL: "https://trainstuff-7a5b9.firebaseio.com",
    projectId: "trainstuff-7a5b9",
    storageBucket: "",
    messagingSenderId: "372948943086"
};

// Variable to reference the database
firebase.initializeApp(config);
var database = firebase.database();

    // store train input values
    var name = ""
    var destination = ""
    var time = ""
    var frequency = ""


$("#addTrain").on("click", function (event) {
    event.preventDefault();

    
    name = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    time = $("#train-time").val();
    frequency = $("#frequency").val().trim();
    console.log(name, destination, time, frequency);



    // Pushing to database
    database.ref().push({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

// Firebase watcher .on("child_added"
database.ref().on("child_added", function (snapshot) {
    // variable for snapshot.val
    var sv = snapshot.val();
    console.log(sv.name);
    console.log(sv.destination);
    console.log(sv.time);
    console.log(sv.frequency);

    // Change the HTML to reflect
// $(".table-striped").append("<tr><td> " +
//     snapshot.val().name +
//     " </td><td> " + snapshot.val().role +
//     " </td><td> " + snapshot.val().startDate +
//     " </td><td> " + monthsSince + " </td><td> " + snapshot.val().monthlyRate +
//     " </td><td> " + billedAmount + " </td>");

// Handle the errors
}, function (errorObject) {
console.log("Errors handled: " + errorObject.code);
});

// display values to page

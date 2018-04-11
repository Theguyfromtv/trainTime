// Initialize Firebase
var config = {
  apiKey: "AIzaSyCMWZKfm1wwVFSn4lNyeoeSzm1NBCLdiMI",
  authDomain: "traintime-e678b.firebaseapp.com",
  databaseURL: "https://traintime-e678b.firebaseio.com",
  projectId: "traintime-e678b",
  storageBucket: "",
  messagingSenderId: "316353083351"
};
firebase.initializeApp(config);

var batBase = firebase.database();



// New employee added event listener
 batBase.ref('train/').on('child_added', function(snapshot) {
  console.log('Change!');
  add_row(snapshot.val());
});


// add employee to database
function addTrain(name, destination, firstTrain, frequency, nextTrainStr, minutesAway ) {
  const train_model = {
    name: name,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency,
    nextTrain: nextTrainStr,
    minutesAway: minutesAway,
  }

  batBase.ref('train/').push().set(train_model);

}


function add_row(data) {
  console.log(data);
  $('#employeeTable').append(`<tr>
    <td>${data.name}</td>
    <td>${data.destination}</td>
    <td>${data.firstTrain}</td>
    <td>${data.frequency}</td>
    <td>${data.nextTrain}</td>
    <td>${data.minutesAway}</td>


    <tr>`);
}

//put the interpreter into strict mode
"use strict";

$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyALn1QdeORKq1g7jyDvkREPnqF2CKskO_I",
    authDomain: "newsletter-d8f2a.firebaseapp.com",
    databaseURL: "https://newsletter-d8f2a.firebaseio.com",
    storageBucket: "newsletter-d8f2a.appspot.com",
    messagingSenderId: "681396689198"
  };
  firebase.initializeApp(config);



firebase.auth().signInAnonymously().catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
});


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    // ...
  } else {
  }
});
//get a reference to the new task form, the input in that form
//and the <ul> element where we will show our tasks
var taskForm = document.getElementById("newLetterForm")
var taskList = document.querySelector(".newsletterInput");

//get a reference to all the data under the "tasks"
//property in our Firebase database. We can use this
//to get notified whenever that data changes, and to
//insert new data into the database.
//for details on Firebase database references, see
//https://firebase.google.com/docs/reference/js/firebase.database.Reference
var tasksRef = firebase.database().ref("emails");
//whenver the submit event on the form occurs...
taskForm.addEventListener("submit", function(evt) {
    //tell the browser to not do its default behavior
    //so that we can handle this locally
    evt.preventDefault();
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(taskList.value)){
                Materialize.toast('Email format incorrect! Please re-enter', 5000) 
    } else {
        //create a new task object with the properties we
        //want to store in the Firebase database
        console.log(taskList.value);
        var task = {
            title: taskList.value.trim(),
            createdOn: firebase.database.ServerValue.TIMESTAMP, //when created, filled in by Firebase
        };

        //push that new object into the tasks ref
        //this will create a new object under "tasks"
        //with all of the data we just added to `task`;
        //it will also trigger the "value" event on the
        //tasksRef, as the data under it has now changed
        tasksRef.push(task);
        
        //clear the task title input so we can type in
        //another task
        taskList.value = "";
        Materialize.toast('You have successfully signed up for our newsletter', 15000) 
        
    }
    //for older browsers...
    return false;
});


});

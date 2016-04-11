/**
 * Created by mustafa.hanif on 4/11/16.
 */
// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();


var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://burning-heat-8654.firebaseio.com");


var i = setInterval(function(){
    myFirebaseRef.child("novel").once("value", function(snapshot) {
        var data = "";
        if (snapshot.val() != null){
            data = snapshot.val();
        }
        var random_word = chance.word();
        var new_word = data + " " + random_word;
        myFirebaseRef.set({
            novel: new_word
        });
    });
}, 3000);




/******       Challenge 1      *******/
function test() {
  var a = "3";
  var b = "8";

  /********* Do not change the code above ********/
  //Write your code on lines 7 - 9:
  var c = a;
  a = b;
  b = c;
  /****** Do not change the code below *******/
  console.log("a is " + a);
  console.log("b is " + b);
}
/******       Challenge 2      *******/
 tweet = prompt("Write anything you can think of");
var tweetcount = tweet.length;
 var remaing = 140 - tweet.length;
 var tweetunder140 = tweet.slice(0,140);
 alert(tweetunder140)
 console.log("You have writen " + tweetcount + " caracters, now you have " + remaing + " characters left. ");

/* Multiline 
comment */

/****   Challenge 3    ****/
//Cut of the tweet by using a prompt and an alert
alert(prompt("Write your tweet").slice(0,140))

/****************      Challenge 4: Case Changing      ****************/
// Create a var that stores the name that the user enters via prompt
var name = prompt("What is your name?")
// Captalizes the first letter of the name
// 1. Isolate the first character
var firstchar = name.slice(0,1);
// 2. Turn the first character into upper case
var upperFirstChar = firstchar.toUpperCase();
// 3. I solate the rest od the name
var restName = name.slice(1,name.length);
var restofName = restName.toLowerCase();
// 4. Concatenate the first char with the rest of the characters
var captaliseName = upperFirstChar + restofName

// Use the alert to greet the user with the first letter captalized
alert("Hello, " + captaliseName);

/****************      Challenge 5: Case Changing      ****************/
// Convert the dog age to human age

dogAge = prompt("What's the dog's age")
humanAge = (dogAge -2)*4 +21
console.log(humanAge)
alert("Your dog is " + humanAge + " years old in human years");

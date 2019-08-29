$(document).ready(function() {
  var chars = 'abcdefghijklmnopqrstuvwxyz';
  var currentChar = 'a';
  var guesses = '';
  var left = 0;
  var wins = 0;
  var losses = 0;

  var update = function() {
    $('#guesses').text(guesses);
    $('#left').text(left);
    $('#wins').text(wins);
    $('#losses').text(losses);
  }

  var newChar = function() {
    var randomInt = Math.floor(Math.random() * 26);
    currentChar = chars[randomInt];
    console.log('key: ' + currentChar);
  }

  var newGame = function() {
    newChar();
    guesses = '';
    left = 9;
    update();
  }

  var check = function (c) {
    console.log(c);
    if (c == currentChar) {
      alert("You got it!");
      wins++;
      newGame();
    } else {
      left--;
      if (left == 0) {
        alert("Sorry, no more guesses left :(");
        losses++;
        newGame();
      } else {
        guesses = guesses + ' ' + c;
      }
      update();
    }
  }

  document.onkeyup = function(event) {
    var key = event.key;
    if (!chars.includes(key)){
      return;
    }
    check(key);
    console.log(key);
  };

  newGame();
});
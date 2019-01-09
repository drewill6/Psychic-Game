var wins = 0;
var losses = 0;

var letter = null;
var guesses = 10;

function GenerateRandomLetter() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

document.onkeypress = function(event) {
  
      // on the click event...
    guess = event.key.toLowerCase();

    console.log(letter);
    console.log(guess);
}

// update the wins/losses
    var userGuess = event.key;

    if(userGuess === possible){
        wins++;
    resetGame();
      
    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++;
      resetGame();
    }
   
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('you guessed what').innerHTML = "You Guessed What: " + guesses;

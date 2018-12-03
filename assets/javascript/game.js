var tries = 0;
var maxTries = 10;
var wins = 0;
var losses = 0;

var letter = null;
var guesses = [];

$(document).ready(function() {
    ResetGame();

    // on the click event...
    $("#guessBtn").on('click', function(e) {
        var guess = $("#guess").val().trim().toUpperCase();
        
        console.log(letter);
        console.log(guess);

        // update the win/loss counters
        if(guess == letter)
        {
            wins++;
            $("#wins").text(wins);
            guesses.push({ win: true, guess: guess});

            // change the letter to guess to a new letter
            letter = GenerateRandomLetter();
        }
        else
        {
            losses++;
            $("#losses").text(losses);
            guesses.push({ win: false, guess: guess});
        }

        // update the number of tries
        tries++;
        $("#triesLeft").text(maxTries - tries);
        if((maxTries - tries) <= 0)
        {
            $(".playing").hide();
            $(".reset").show();
        }

        // display the previous guesses
        var html = "";
        for(var i = 0; i < guesses.length; i++)
        {
            var color = "red";
            if(guesses[i].win == true)
            {
                color = "green";
            }
            var span = "<span class='guess' style='color: " + color + ";'>" + guesses[i].guess + "</span>";
            html += span;
        }
        $("#guesses").html(html);
        
        // blank out the guess input
        $("#guess").val(null);
    });

    // on click the reset button
    $("#reset").on('click', function(e) {
        ResetGame();
    });
});

function ResetGame() {
    tries = 0;
    maxTries = 10;
    wins = 0;
    losses = 0;
    letter = null;
    guesses = [];

    letter = GenerateRandomLetter();
    $("#triesLeft").text(maxTries - tries);

    $(".playing").show();
    $(".reset").hide();

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#triesLeft").text(maxTries);
}

function GenerateRandomLetter()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (var i = 0; i < 1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    return text;
}

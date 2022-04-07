var game = new Game();


// main entry point
function playGame() {
    game.newGame()
    // Call the function game.newGame() to reset the counts.
    let numberOfRounds = prompt("Please enter how many rounds you would like to play");
    numberOfRounds = parseInt(numberOfRounds, 10)
    if (game.IsNumberOfRoundsValid(numberOfRounds)) {
        game.setNumberOfRounds(numberOfRounds);
    } else {
        numberOfRounds = prompt("Invalid entry. You must enter a value between 1 and 5");
        numberOfRounds = parseInt(numberOfRounds, 10)
        if (game.IsNumberOfRoundsValid(numberOfRounds)) {
            game.setNumberOfRounds(numberOfRounds);
        }
    }
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
    // Use game.IsNumerOfRoundsValid() to validate the user input.
    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the suer again


    playRound(numberOfRounds)
    // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round 


    console.log()
    // Display the Final Score from the properties stored in the Game object

}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    //*********************************ADD CODE HERE *************************************/ console.log()
    // Display the Current Score to the User
    
    //Prompt for Player Selection
    var playerSelection = getPlayerSelection();
    var round = new Round(playerSelection);

    //Play the Round
    var outcome = round.determineWinner();

    //*********************************ADD CODE HERE *************************************/ console.log()
    // Display the Round Results from the properties stored in the Round object

}



/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
    
    playerSelection = prompt("Enter your move (must be 'ROCK', 'SCISSORS', or 'PAPER'")
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly
}


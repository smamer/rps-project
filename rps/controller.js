var game = new Game();


// main entry point
function playGame() {
    game.newGame()
    // Call the function game.newGame() to reset the counts.
    let numberOfRounds = prompt("Please enter how many rounds you would like to play");
    numberOfRounds = parseInt(numberOfRounds, 10)
    if (game.isNumberOfRoundsValid(numberOfRounds)) {
        game.setNumberOfRounds(numberOfRounds);
    } else {
        numberOfRounds = prompt("Invalid entry. You must enter a value between 1 and 5");
        numberOfRounds = parseInt(numberOfRounds, 10)
        if (game.isNumberOfRoundsValid(numberOfRounds)) {
            game.setNumberOfRounds(numberOfRounds);
        }
    }
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
    // Use game.IsNumerOfRoundsValid() to validate the user input.
    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the suer again


    for(var i = 1; i <= numberOfRounds; i++) {
        playRound(i);
        var currentRound = numberOfRounds;
        currentRound =- 1;
    }
    // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round 


    console.log("Rounds played: " + game.numberOfRounds + " Ties: " + game.countOfTies);
    console.log(`Rounds played: ${game.numberOfRounds} Ties: ${game.countOfTies}`)
    console.log(`Player Final Score: ${game.countOfPlayerWins} Computer Final Score: ${game.countOfComputerWins}`);
    if(game.countOfPlayerWins > game.countOfComputerWins) {
        console.log("Player Wins!");
    } else if (game.countOfComputerWins > game.countOfPlayerWins) {
        console.log("ComputerWins!");
    } else {
        console.log("Tie");
    }
    // Display the Final Score from the properties stored in the Game object

}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    console.log(`Current Round: ${roundNumber}`)
    console.log(`Player Score: ${game.countOfPlayerWins} Computer Score: ${game.countOfComputerWins} Ties ${game.countOfTies}`)
    // Display the Current Score to the User
    
    //Prompt for Player Selection
    var playerSelection = getPlayerSelection();
    var round = new Round(playerSelection);

    //Play the Round
    var outcome = round.determineWinner();

    switch (outcome)
    {
        case "player":
            game.incrementPlayerWins();
            break;
        case "computer":
            game.incrementComputerWins();
            break;
        case "tie":
            game.incrementCountOfTies();
            break;
    }
    console.log(`Player Chose: ${playerSelection} Computer Chose: ${round.computerSelection}`);
    console.log(`Winner is: ${outcome}`);
    // Display the Round Results from the properties stored in the Round object

}



/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
    
    let playerSelection = prompt("Enter your move (must be 'rock', 'scissors', or 'paper')");
    switch (playerSelection) {
        case "rock":
            return Selections.ROCK;
            break;
        case "scissors":
            return Selections.SCISSORS;
            break;
        case "paper":
            return Selections.PAPER;
            break;
        default:
            return Selections.ROCK;
    }
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly
}


// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);


class Round{

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
        let computerSelection = Math.floor(Math.random()*10)
        switch (computerSelection) {
            case 0:
            case 1:
            case 2:
                text = ROCK;
                break;
            case 3:
            case 4:
            case 5:
                text = SCISSORS;
                break;
            default:
                text = PAPER;
        }
        // Use Math.floor and select a random Selections enumerator from above 
    }

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner() {
        switch (this.playerSelection = ROCK) {
            case this.computerSelection = PAPER:
                text = COMPUTER_WINS;
                break;
            case this.computerSelection = ROCK:
                text = TIE;
                break;
            case this.computerSelection = SCISSORS:
                text = PLAYER_WINS;
            }
        switch (this.playerSelection = SCISSORS) {
            case this.computerSelection = ROCK:
                text = COMPUTER_WINS;
                break;
            case this.computerSelection = SCISSORS:
                text = TIE;
                break;
            case this.computerSelection = PAPER:
                text = PLAYER_WINS;
            }
        switch (this.playerSelection = PAPER) {
            case this.computerSelection = ROCK:
                text = PLAYER_WINS;
                break;
            case this.computerSelection = SCISSORS:
                text = COMPUTER_WINS;
                break;
            case this.computerSelection = PAPER:
                text = TIE;
        }
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.
    }



}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;
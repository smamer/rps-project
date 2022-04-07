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
        let computerSelection = Math.floor(Math.random()*9)
        switch (computerSelection) {
            case 0:
            case 1:
            case 2:
                return Selections.ROCK;
                break;
            case 3:
            case 4:
            case 5:
                return Selections.SCISSORS;
                break;
            default:
                return Selections.PAPER;
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
        switch (this.playerSelection) {
            case "scissors":
                if (this.computerSelection === "rock")
                {
                    return Outcomes.COMPUTER_WINS;
                } else if (this.computerSelection === "scissors") {
                    return Outcomes.TIE;
                } else {
                    return Outcomes.PLAYER_WINS;
                }
                break;
            case "rock":
                if (this.computerSelection === "paper")
                 {
                    return Outcomes.COMPUTER_WINS;
                } else if (this.computerSelection === "rock") {
                    return Outcomes.TIE;
                } else {
                    return Outcomes.PLAYER_WINS;
                }
                 break;
            case "paper":
                if (this.computerSelection === "scissors")
                {
                    return Outcomes.COMPUTER_WINS;
                } else if (this.computerSelection === "paper") {
                    return Outcomes.TIE;
                } else {
                    return Outcomes.PLAYER_WINS;
                }
                break;
            }
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.
    }



}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;
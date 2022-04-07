class Game{
    constructor(){
        this.numberOfRounds = null;
        this.countOfPlayerWins = 0;
        this.countOfComputerWins = 0;
        this.countOfTies = 0;
    }
    incrementPlayerWins(){
        this.countOfPlayerWins++
        // Add 1 to the countOfPlayerWins property
    }

    incrementComputerWins(){
        this.countOfComputerWins++
        // Add 1 to the countOfComputerWins property
    }

    incrementCountOfTies(){
        this.countOfTies++
        // Add 1 to the countOfTies property
    }


    setNumberOfRounds(numberOfRounds){
        this.numberOfRounds = numberOfRounds
        // Set the numberOfRounds property to the parameter
    }

    newGame(){
    this.numberOfRounds = null,
    this.countOfPlayerWins = 0,
    this.countOfComputerWins = 0,
    this.countOfTies = 0
        // Clear all properties to their default values
    }

     /**
     * tests the numberOfRounds global variable and determines if it is a valid value
     * @returns boolean
     */
     isNumberOfRoundsValid(num) {
       if (num < 6 && num > 0) {
           return true;
       } else {
           return false;
       }
        // return a boolean value that shows if the parameter is a valid user input (A number from 1 - 5)
    }
}



// DO NOT TOUCH THIS CODE
let unit_test  = Game;
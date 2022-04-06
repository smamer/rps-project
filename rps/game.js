class Game{
    constructor(){
        this.numberOfRounds = null;
        this.countOfPlayerWins = 0;
        this.countOfComputerWins = 0;
        this.countOfTies = 0;
    }
    incrementPlayerWins(){
        let countOfPlayerWins = 0
        console.log(++countOfPlayerWins)
        // Add 1 to the countOfPlayerWins property
    }

    incrementComputerWins(){
        let countOfComputerWins = 0
        console.log(++countOfComputerWins)
        // Add 1 to the countOfComputerWins property
    }

    incrementCountOfTies(){
        let countOfTies = 0
        console.log(++countOfTies)
        // Add 1 to the countOfTies property
    }


    setNumberOfRounds(numberOfRounds){
        console.log(++numberOfRounds)
        // Set the numberOfRounds property to the parameter
    }

    newGame(){
    numberOfRounds = null,
    countOfPlayerWins = 0,
    countOfComputerWins = 0,
    countOfTies = 0
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
           false;
       }
        // return a boolean value that shows if the parameter is a valid user input (A number from 1 - 5)
    }
}



// DO NOT TOUCH THIS CODE
let unit_test  = Game;
const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {

  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");
  // Your code here
}

function getWinner(move1, move2) {

  if (move1 === move2) { // tie
    return(0)
  }
  else if (VALID_MOVES[move1].winsAgainst === move2) { // win
    return(1);
  } else { // loss
    return(-1);
  }
  // Your code here
}

function getCPUMove() {

  const validMoveKeys = Object.keys(VALID_MOVES);
  const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
  return validMoveKeys[randomIndex];
  // Your code here
}

function processMove(cmd, cpu) {

  console.log(`You pick ${cmd}, computer picks ${cpu}.`);

  let get = getWinner(cmd,cpu);

      if(get === 0)
      {
        console.log("You tie.\n");
        ties++
      }
      else if(get === 1)
      {
        console.log("You win!\n");
        wins++;
      }
      else if(get === -1)
      {
        console.log("You lose...\n");
        losses++;
      }
  // Your code here
}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();


    //printHelp(cmd);

    if (cmd === 'h') {

      console.log("\nHelp:\n");
      /*console.log("  Type 'r' for Rock");
      console.log("  Type 'p' for Paper");
      console.log("  Type 's' for Scissors");
      console.log("  Type 'q' to quit");
      console.log("  Type 'h' for a list of valid commands\n"); */

      printHelp();

    } else if (cmd === 'q') {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]){

      /*
      const validMoveKeys = Object.keys(VALID_MOVES);
      const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
      const cpu = validMoveKeys[randomIndex]; */

      const cpu = getCPUMove();

      //console.log(`You pick ${cmd}, computer picks ${cpu}.`);


      processMove(cmd,cpu);

      /*
      let get = getWinner(cmd,cpu);

      if(get === 0)
      {
        console.log("You tie.\n");
        ties++
      }
      else if(get === 1)
      {
        console.log("You win!\n");
        wins++;
      }
      else if(get === -1)
      {
        console.log("You lose...\n");
        losses++;
      }*/
/*
      if (cmd === cpu) { // tie
        console.log("You tie.\n");
        ties++;
      }
      else if (VALID_MOVES[cmd].winsAgainst === cpu) { // win
        console.log("You win!\n");
        wins++;
      } else { // loss
        console.log("You lose...\n");
        losses++;
      }

      */
    } else {

      //printHelp(cmd);

      console.log("\nInvalid command.\n");
      printHelp();
      /*console.log("  Type 'r' for Rock");
      console.log("  Type 'p' for Paper");
      console.log("  Type 's' for Scissors");
      console.log("  Type 'q' to quit");
      console.log("  Type 'h' for a list of valid commands\n");
      */
    }

    /*
    if(cmd === 'q')
    {
      rl.close();
      return;
    }*/

    promptInput(rl);

    //if(cmd != 'q') promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");

  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};

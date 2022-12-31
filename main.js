
let playerScore=0;
let computerScore=0;
let  playerSelection;
let  computerSelection;


game();


function inputCheck (input) {
  if (input==='') {
    return 'No selection!';
  } else if(input===null) {
    return 'Cancelled';
  } else {
  return getUserChoice(input);
  }
}

function getUserChoice(userInput) {
    let str1 = userInput.toLowerCase();
    let str2 = str1.substring(1);
    let capChar = str1.charAt(0).toUpperCase();
    let userChoice = capChar + str2;
    return userChoice;  
}

//function to get computer choice
function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3+1);
    let computerChoice;
    switch (rand) {
        case 1:
            computerChoice = 'Rock';
            break;
        case 2:
            computerChoice = 'Paper';
            break;
        case 3:
            computerChoice = 'Scissors';
            break;
    }
    return computerChoice;
}


function playRound(x,y) {
    let result;
    //let playerScore = 0;
    //let computerScore = 0;
    //let playerTScore = playerScore;
    //let computerTScore = computerScore;
    if (x === 'Rock' || x === 'Paper' || x === 'Scissors') {
    
    //user rock case
             if (x==='Rock'&& y==='Rock') {
        result = 'Its a tie!';
    }
        else if (x==='Rock'&& y==='Paper') {
        result = 'You Loose! Paper beats Rock';
        computerScore += 1;
    }
        else if (x==='Rock'&& y==='Scissors') {
        result = 'You Win! Rock beats Scissors';
        playerScore += 1;
    }
    //user paper case
        else if (x==='Paper'&& y==='Rock') {
        result = 'You Win! Paper beats Rock';
        playerScore += 1;
    }
        else if (x==='Paper'&& y==='Paper') {
        result = 'Its a tie!';
    }
        else if (x==='Paper'&& y==='Scissors') {
        result = 'You Loose! Scissors beats Paper';
        computerScore += 1;
    }
    //user scissors case
        else if (x==='Scissors'&& y==='Rock') {
        result = 'You Loose! Rock beats Scissors';
        computerScore += 1;
    }
        else if (x==='Scissors'&& y==='Paper') {
        result = 'You Win! Scissors beats Paper';
        playerScore += 1;
    }
        else if (x==='Scissors'&& y==='Scissors') {
        result = 'Its a tie!';
    }
    
    } else {
        // default case 
            result = 'Invalid Choice';
    }
    return result;
}

function game(){
  for (let i=0;i<5;i++) {
   const input = prompt('Rock, Paper, Scissors','');
   playerSelection = inputCheck(input);
   computerSelection = getComputerChoice();
   console.log(`You chose: ${playerSelection}`);
   console.log(`Computer chose: ${computerSelection}`);
   console.log(playRound(playerSelection,computerSelection));
  }
  
  console.log('Your Score: '+ playerScore);
  console.log('Computer Score: '+ computerScore);

  if (playerScore === computerScore) {
    console.log('Its tied!');
  } else if(playerScore > computerScore){
    console.log('You Win!');
  } else {
     console.log('You loose!');
  }
}

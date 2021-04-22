const rockBtn= document.getElementById('rock');
const paperBtn= document.getElementById('paper');
const scisorBtn= document.getElementById('scisor');
const score = document.getElementById('score');
const para = document.getElementById('para');
const winner = document.getElementById('winner');
const newGameBtn = document.querySelector('.new-game');
const resetBtn = document.querySelector('.reset');

// initial state
let playerBet = '';
let computerScore = 0;
let humanScore = 0;
const resultArray = ['rock', 'paper', 'scisor'];
let array = [ para,score,rockBtn,paperBtn,scisorBtn];



// display the score 
function displayScore () {
    score.innerText = `Computer ${computerScore} - ${humanScore} Human `;
}

// display the result
function displayResult (result){
   para.innerText = `${result}`;
}

// check The logic
function checker (computerSelection, playerBet) {
    if (computerScore===5 || humanScore===5) return
    if (computerSelection===playerBet){
      return  displayResult('Tie game');
    }
    if (computerSelection==='rock' && playerBet === 'paper'|| 
        computerSelection==='paper' && playerBet === 'scisor'||
        computerSelection==='scisor' && playerBet === 'rock' ){
        humanScore++;
        displayResult(`${playerBet} beats ${computerSelection}`);
        return displayScore();
    }
    if (computerSelection==='paper' && playerBet === 'rock'|| 
        computerSelection==='scisor' && playerBet === 'paper'||
        computerSelection==='rock' && playerBet === 'scisor'){
        computerScore++;
        displayResult(`${computerSelection} beats ${playerBet}`)
        return displayScore();
    }
}

// Computer Play with random bet
function computerPlay () {
    let result = resultArray[Math.floor(Math.random()*3)]
    return result;
}

// Game launcher
function game(playerBet){
    computerSelection = computerPlay();
    checker(computerSelection, playerBet);
}

// Declare the winner
function showWinner(){
    if (computerScore===5) {
        array.forEach(elem => elem.hidden=true)
      return  winner.innerText ='computer win'.toUpperCase();
        
    } 
     if (humanScore===5){
        array.forEach(elem => elem.hidden=true)
     return  winner.innerText ='human win'.toUpperCase();
        
    }
}

// Reset game

function reset (){
 computerScore = 0;
 humanScore = 0;
 array.forEach(elem=> elem.hidden=false)
 displayScore();
 displayResult('');
}


// Even listeners
rockBtn.addEventListener('click', ()=> {
    game('rock');
    showWinner();
});
paperBtn.addEventListener('click', ()=>{ 
    game('paper')
    showWinner();
});
scisorBtn.addEventListener('click', ()=> {
    game('scisor');
    showWinner();
});

resetBtn.addEventListener('click', reset);
newGameBtn.addEventListener('click', reset);
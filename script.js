const rockBtn= document.getElementById('rock');
const paperBtn= document.getElementById('paper');
const scisorBtn= document.getElementById('scisor');
const PTag = document.getElementById("rock-p");
const div = document.getElementById('round');

let playerBet = '';
let computerScore = 0;
let humanScore = 0;


function displayScore () {
    const score = document.createElement('p');
    score.innerText = `Computer : ${computerScore} & Human: ${humanScore}`;
    div.appendChild(score);
}

function displayResult (result){
   const p = document.createElement('p');
   p.innerText = `${result}`;
   div.appendChild(p);
}

function checker (computerSelection, playerBet) {
    if (computerSelection===playerBet){
        displayResult('Tie game');
    return 'tie game'
    } else if (computerSelection==='rock' && playerBet === 'paper'|| 
        computerSelection==='paper' && playerBet === 'scisor'||
        computerSelection==='scisor' && playerBet === 'rock' ){
        humanScore++;
            displayResult(`${playerBet} beats ${computerSelection}`)
    return `You win ${playerBet} beats ${computerSelection}`
    } else if (computerSelection==='paper' && playerBet === 'rock'|| 
        computerSelection==='scisor' && playerBet === 'paper'||
        computerSelection==='rock' && playerBet === 'scisor'){
        computerScore++;
        displayResult(`${computerSelection} beats ${playerBet}`)
    return `You lose ${computerSelection} beats ${playerBet}`; 
    }
}


function computerPlay () {
    let resultArray = ['rock', 'paper', 'scisor'];
    let result = resultArray[Math.floor(Math.random()*3)]
    return result;
}

function game(computerSelection, playerBet){
    if (computerScore===5) {
        PTag.innerText ='computer win';
        return
    }  else if (humanScore===5){
        PTag.innerText ='human win';
        return
    }
    checker(computerSelection, playerBet);
    }

rockBtn.addEventListener('click', ()=> {
    playerBet = 'rock';
    computerSelection = computerPlay();
    game(playerBet, computerSelection);
    displayScore()
})
paperBtn.addEventListener('click', ()=> {
    playerBet = 'paper';
    computerSelection = computerPlay();
    game(playerBet, computerSelection);
    displayScore()
});
scisorBtn.addEventListener('click',()=> {
    playerBet = 'scisor';
    computerSelection = computerPlay();
    game(playerBet, computerSelection);
    displayScore()
});

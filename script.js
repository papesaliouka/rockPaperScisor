const rockBtn= document.getElementById('rock');
const paperBtn= document.getElementById('paper');
const scisorBtn= document.getElementById('scisor');



function computerPlay () {
    let resultArray = ['rock', 'paper', 'scisor'];
    let result = resultArray[Math.floor(Math.random()*3)]
    return result;
}


function game(computerSelection, playerBet){
   if (computerSelection===playerBet){
       console.log('tie game');
       return 'tie game'
   } else if (computerSelection==='rock' && playerBet === 'paper'|| 
              computerSelection==='paper' && playerBet === 'scisor'||
              computerSelection==='scisor' && playerBet === 'rock' ){
       console.log(`You win ${playerBet} beats ${computerSelection}`);
       return `You win ${playerBet} beats ${computerSelection}`
   } else if (computerSelection==='paper' && playerBet === 'rock'|| 
   computerSelection==='scisor' && playerBet === 'paper'||
   computerSelection==='rock' && playerBet === 'scisor'){
       console.log(`You lose ${computerSelection} beats ${playerBet}`);
       return `You lose ${computerSelection} beats ${playerBet}`; 
   }else{
       console.log("please bet");
       return;
   }
}

let count = 0;
for (let i = 0; i<=4; i++){
    const computerSelection =  computerPlay();
    rockBtn.addEventListener('click', () => playerBet='rock')
    paperBtn.addEventListener('click', () => playerBet= 'paper');
    scisorBtn.addEventListener('click', () => playerBet= 'scisor');
    game(computerSelection, playerBet); 
    if (computerSelection==='rock' && playerBet === 'paper'|| 
    computerSelection==='paper' && playerBet === 'scisor'||
    computerSelection==='scisor' && playerBet === 'rock' ){
        count++;
    }else if(computerSelection==='paper' && playerBet === 'rock'|| 
    computerSelection==='scisor' && playerBet === 'paper'||
    computerSelection==='rock' && playerBet === 'scisor' ){
        count--
    }
    
}
if (count >=3){
    console.log("human win")
}else {
    console.log("computer win") 
}



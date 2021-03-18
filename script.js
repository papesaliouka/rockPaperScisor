   function computerPlay () {
        let resultArray = ['rock', 'paper', 'scisor'];
        let result = resultArray[Math.floor(Math.random()*3)]
        return result;
    }

    const computerSelection =  computerPlay();
    let playerBet = prompt('rock, paper, scisors');

function game(computerSelection, playerBet){
   if (computerSelection===playerBet){
       console.log('tie game');
       return 'tie game'
   } else if (computerSelection==='rock' && playerBet === 'paper'|| 
              computerSelection==='paper' && playerBet === 'scisor'||
              computerSelection==='scisor' && playerBet === 'rock' ){
       console.log(`You win ${playerBet} beats ${computerSelection}`)
       return `You win ${playerBet} beats ${computerSelection}`
   } else{
       console.log(`You lose ${computerSelection} beats ${playerBet}`)
   }
}


game(computerSelection, playerBet);




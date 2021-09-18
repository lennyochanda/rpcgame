const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
	oneRound(button.id, computerPlay());
    })
});



function oneRound (playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
	declareWinner('draw');
    }
    
    else if (playerChoice === 'rock' && computerChoice === 'paper' || 
	playerChoice === 'paper' && computerChoice === 'scissors' ||
	playerChoice === 'scissors' && computerChoice === 'rock') {
	    declareWinner('computer');
    }

    else if (playerChoice !== 'rock' && computerChoice === 'paper' || 
	playerChoice !== 'paper' && computerChoice === 'scissors' ||
	playerChoice !== 'scissors' && computerChoice === 'rock') {
	    declareWinner('person');
    }
}



function computerPlay () {
    const choiceList = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choiceList[randomNumber];
}


let drawCount = 0;
let personCount = 0;
let computerCount = 0;


function declareWinner (winner) {
        //calculate score
    if (winner === 'draw') {
	drawCount++;
	displayResult('draw', drawCount);

    }

    else if (winner === 'person') {
	personCount++;
	displayResult('person', personCount);
    }

    else {
	computerCount++;
	displayResult('computer', computerCount);
    }

}



//show final results
function displayResult(theWinner, gamesWon) {
    const content = document.getElementsByClassName('content')[0];

    if (theWinner === 'draw') {
        content.textContent = `It was a tie!`;
    }

    else if (theWinner === 'person') {
	content.textContent = `You Won ${personCount} : ${computerCount} .`;
    }

    else if (theWinner === 'computer') {
	content.textContent = `You Lost ${personCount} : ${computerCount}`;
    }
}

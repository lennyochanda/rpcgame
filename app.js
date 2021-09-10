		function computerPlay () {
			const choice = ['rock', 'paper', 'scissors']
			const randomChoice = Math.floor(Math.random() * choice.length)
			return choice[randomChoice]
				}
		
		function gamerPlay () {
			const choice = window.prompt("Are You Ready to Play? Type 'Rock', 'Paper' or 'Scissors'. ")
			return choice.toLowerCase()
				}

		let computerCounter = 0
		let playerCounter = 0
		let drawCounter = 0
		function oneRound (playerSelection, computerSelection) {
			if (playerSelection === computerSelection) {
				drawCounter++
				alert("It's a Draw! Try Again.")
					}

			else if (playerSelection === 'rock') {
				if (computerSelection === 'paper') {
					computerCounter++
					alert(`You Lost! ${computerSelection} beats ${playerSelection}.`)
						}
				else {
					playerCounter++
					alert(`You Won! ${playerSelection} beats Scissors.`)
					}
						}
			else if (playerSelection === 'paper') {
				if (computerSelection ==='rock') {
					playerCounter++
					alert(`You Won! ${playerSelection} beats ${computerSelection}.`)
						}
				else {
					computerCounter++
					alert(`You Lost! Scissors beats ${playerSelection}.`)
					}
						}
			else if (playerSelection === 'scissors') {
				if (computerSelection ==='paper') {
					playerCounter++
					alert(`You Won! ${playerSelection} beats ${computerSelection}.`)
						}
				else {
					computerCounter++
					alert(`You Lost! Rock beats ${playerSelection}.`)
					}
					}
			else if (playerSelection !== 'paper' || 'scissors' || 'rock') {
				alert('Please enter a valid choice.')
							}
						}
		
		function game () {
			for (let i = 1; i < 6; i++) {
				const computerSelection = computerPlay()
				const playerSelection = gamerPlay() 		
				oneRound(playerSelection, computerSelection)
					}
			if (computerCounter > playerCounter) {
				alert(`The computer wins with ${computerCounter} against ${playerCounter} and ${drawCounter} draws.`)
							}
			else {
				alert(`You win with ${playerCounter} against ${computerCounter} and ${drawCounter} draws.`)


					}
					}

		game()

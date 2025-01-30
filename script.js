function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function getHumanChoice() {
    const choice = prompt('Enter your choice: rock, paper, or scissors');
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        console.log('Invalid choice. Please enter rock, paper, or scissors.');
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } 

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; 

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        
        if (result.includes("You win")) {
            humanScore++;
        } else if (result.includes("You lose")) {
            computerScore++;
        }

        resultsDiv.innerHTML += `<p>Round ${i + 1}: ${result}</p>`;
    }

    if (humanScore > computerScore) {
        resultsDiv.innerHTML += "<h2>Congratulations! You win the game! 🎉</h2>";
    } else if (humanScore < computerScore) {
        resultsDiv.innerHTML += "<h2>You lost the game. Better luck next time! 😞</h2>";
    } else {
        resultsDiv.innerHTML += "<h2>It's a tie! 🤝</h2>";
    }
}
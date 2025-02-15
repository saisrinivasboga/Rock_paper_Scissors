let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(player, computer) {
    if (player === computer) {
        return "It's a tie! 🤝";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        playerScore++;
        updateScores();
        return "You win! 🎉";
    } else {
        computerScore++;
        updateScores();
        return "Computer wins! 😢";
    }
}

function getEmoji(choice) {
    const emojis = {
        rock: "✊",
        paper: "✋",
        scissors: "✌️"
    };
    return emojis[choice];
}

function updateScores() {
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    document.getElementById('computer-choice').textContent = "Waiting for your move...";
    document.getElementById('result').textContent = "Choose your move!";
}

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        
        // Add animation class
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 200);
        
        // Update computer choice display
        document.getElementById('computer-choice').textContent = 
            `Computer chose: ${getEmoji(computerChoice)}`;
        
        // Get and display result
        const result = getWinner(playerChoice, computerChoice);
        document.getElementById('result').textContent = result;
    });
});

document.getElementById('reset-game').addEventListener('click', resetGame);
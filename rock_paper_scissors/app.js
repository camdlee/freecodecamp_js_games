
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice 
let computerChoice


// Your Choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event)=>{
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))

// Function to generate Computer Choice
const generateComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1
    // console.log(randomNum)
    if(randomNum === 1){
        computerChoice = 'rock'
    } else if (randomNum === 2) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
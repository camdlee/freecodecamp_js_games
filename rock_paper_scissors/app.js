
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice 
let computerChoice
let result

// Your Choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event)=>{
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
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


// Function to calculate result
const getResult = () => {
    if(computerChoice === userChoice){
        result = "It's a tie!"
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You win!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'You lose :('
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'You lose :('
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You win!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You lose :('
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You win!'
    }
    resultDisplay.innerHTML = result
}
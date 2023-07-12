
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let moleSquare
let currentTime = 60
let timerId = null

// Function to randomize where mole is located in grid
const randomSquare = () =>{
    // starting with clean slate - this will remove the mole class from all squares
    squares.forEach(square=> {
        square.classList.remove('mole')
    })

    // using Math.random to get a random number for the square for the mole to appear
    // math.random will retrun a random value between 0 and 1, 0 is possible but not 1
    // Multiplying by 9 will get us close to any of the whole numbers for our squares
    // math.floor will round down that float
    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')

    moleSquare = randomSquare.id
}

// Function to calculate score
squares.forEach(square=> {
    // adding an event listener where for each square it will check to see if the mouse is in the same square as the mole
    square.addEventListener('mousedown', () => {
        if (square.id == moleSquare){
            result++
            score.textContent = result
            moleSquare = null
        }
    })
})


// Function to move mole on a timer
const moveMole = () => {
    // setInterval will call the function in the 1st argument, 2nd argument is time in ms
    timerId = setInterval(randomSquare, 700)
}

moveMole()

// Function to count down clock
const countDown = () => {
    currentTime--
    timeLeft.innerHTML = currentTime

    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game Over! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)
countDown()
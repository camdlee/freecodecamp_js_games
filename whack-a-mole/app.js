
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0

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
    let randomPosition = squares[Math.floor(Math.random()*9)]
    console.log(randomPosition)
}

randomSquare()
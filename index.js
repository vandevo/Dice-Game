let player1Score = 0
let player2Score = 0
let player1Turn = true

const message = document.getElementById('message')

const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')

const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')

const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')

function block(){
    resetBtn.style.display = "block"
    rollBtn.style.display = "none"
    doubleBtn.style.display = "none"
    
}

rollBtn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * 6);

    if (player1Turn) {
       
        player1Dice.textContent = randomNumber;
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 1 Roll Now!"
    } else {
        player2Dice.textContent = randomNumber
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 2 Roll Now!"
    }

    if (player1Score >= 20){
        message.textContent = "Player 1 has won!"
        block()
        }
     else if (player2Score >= 20){
         message.textContent = "Player 2 has won!"
         block()}
    

    player1Turn = !player1Turn
})


resetBtn.addEventListener('click', function(){
    reset()
})

function reset(){
    message.textContent = "Player 1's Turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    player1Score = 0
    player2Score = 0
    player1Turn = true
    rollBtn.style.display = "block"
    doubleBtn.style.display = "block"
    resetBtn.style.display = "none"
    
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
   
}
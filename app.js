const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0
let currentTime = timeLeft.textContent

function randomSquare () {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 12)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}
randomSquare()
square.forEach (id => {
    id.addEventListener('mouseup', () =>{
        if (id.id === hitPosition){
            id.classList.add('hitMole')
            setTimeout(function(){
                id.classList.remove('hitMole')
            }, 500);
            result = result + 1
            score.textContent = result
        }
    })
})
function moveMole () {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}
moveMole()

function countDown () {
    currentTime--
    timeLeft.textContent = currentTime
    if ( currentTime === 0){
        clearInterval(timerId)
        alert ('Your final score is '+ result)
        clearInterval(result)
        clearInterval(timeLeft)
    }
}
let timerId = setInterval(countDown, 1000)
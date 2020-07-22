// let score = 0;

// //Var holes = document.getElementsByClassName('hole');
// //console.log
// var scoreDisplay = document.getElementById('score');

// console.log(scoreDisplay);
// console.log('line', score);

const mole = document.querySelectorAll('mole')
const timeLeft = document.querySelector('#time-left')

let result = 0
let currentTime = timeLeft.textContent

function randomHole(){
    randomHole.forEach(className => {
        className.clasList.remove('mole')
    })

let randomPosition = hole[Math.floor(Math.random()*9)]
randomPosition.clasList.add('mole')

//asssign the id of the randomPositon to hitPosition for us to use later
hitPosition = randomPosition.randomPosition
}

hole.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPoistion){
            result = result + 1
            Score.textContent = result
        }
    })

})
{
    function moveMole()
    let timeId = null
    timeId = setInterval(randomHole, 1000)
}

moveMole()


function countDown(){
    currentTime --
    timeLeft.textContent = currentTime

    if(currenttime === 0 ) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score'  + result)
    }
}
let timerId = setInterval(countDown, 1000)
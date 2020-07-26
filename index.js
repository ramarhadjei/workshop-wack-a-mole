let score = 0;
​
var scoreDisplay = document.getElementById('score');
console.log("This is our score element", scoreDisplay);

var holes =document.getElementsByClassName('hole');
​
//console.log(holes[0]);
​
setInterval(function(){
    var randomHoleIndex = Math.floor(Math.random()* holes.length);
    holes[randomHoleIndex].classList.toggle('mole');
//console.log("this os our random Index;", randomHoleIndex);
}, 200)
​
var gameArea = document.getElementById('whack-a-mole');
//console.log(gameArea);
​
gameArea.addEventListener('click', function(clickEvent){
    if(clickEvent.target.matches('.mole')){
        //we hit a mole!
        clickEvent.target.classList.remove('mole');
        score++;
        scoreDisplay.innerText = score;
        
    }
})
const messageEl =document.getElementById('message-el')
const cardsEl =document.getElementById('card-el')
const sumEl = document.getElementById('sum-el')
const playerEL = document.getElementById('player-el')
// const startGame =document.getElementById('start-btn')
// const newCard =document.getElementById('newCard-btn')


let cards =[]
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';

let player ={
    name:'Per',
    chip: 145,
}
playerEL.textContent = player.name + ': $' + player.chip

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1 )
    if (randomNumber > 10) {
     return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
 }
}
//startGame//
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    
    cards =[firstCard,secondCard]
     sum = firstCard + secondCard ;
    renderGame()
}

function renderGame (){
    cardsEl.textContent = "Card: "
    
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ' ';
    }
  
    sumEl.textContent = `Sum: ${sum}`;
 if (sum <= 20) {
    message = 'Do you want to draw a new card?';
} else if (sum === 21) {
    message='You got a BlackJack';
    hasBlackJack = true;
} else{
    message='You are out of the game';
    isAlive = false;
};
    messageEl.textContent = message;
    messageEl.style.color = 'red';
    messageEl.style.fontFamily = 'cambria';
    messageEl.style.transition = 'color ease-in .5s';
    messageEl.style.transform = 'scale(1.1)';
    messageEl.style.transition = 'transform .6s';
    
}



//newGme//
function newCard() {

    if (isAlive === true && hasBlackJack === false) {
       
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    sumEl.textContent = `Sum: ${sum}`;
    
   renderGame()
   }
   
}
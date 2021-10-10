
let myOutput = document.getElementById('card')
let enemyOutput = document.getElementById('enemyCard')

getRandomCards = () => {
let myCard = myRandomCard();
let enemyCard = enemyRandomCard();
 
  if(myCard > enemyCard) {
  console.log('I win')
  } else {
 
  }
}

myRandomCard = () => {
  let array = ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  let arrayLocation = Math.floor(Math.random(0, 14) * 10)
  let outputCard = array[arrayLocation]
  console.log(outputCard)
  myOutput.innerHTML = array[arrayLocation]
  return outputCard;
}

enemyRandomCard = () => {
  let array = ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  let arrayLocation = Math.floor(Math.random(0, 14) * 10)
  let outputCard = array[arrayLocation]
  console.log(outputCard)
  enemyOutput.innerHTML = array[arrayLocation]
  return outputCard;
}

// let p = $("#cardPlayer");

// console.log(cardPlayer);

// import deck from "cards.js"
// import * as deck from "cards.js";

// const cardRanks = {
//   "2": 2,
//   "3": 3,
//   "4": 4,
//   "5": 5,
//   "6": 6,
//   "7": 7,
//   "8": 8,
//   "9": 9,
//   "10": 10,
//   J: 11,
//   Q: 12,
//   K: 13,
//   A: 14
// }

// console.log(fullDeck() + "garbcan?");
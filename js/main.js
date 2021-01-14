// Please create a function that takes in two numbers. Print to the console the division of the these two numbers rounded down. 

function dividerRoundedDown(x,y) {
  console.log(Math.floor(x/y))
}

dividerRoundedDown(5,2)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Please create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"!

function isItLongerThanOneHundred(num,word) {
  let valueToCheck = word.length * num
  console.log(valueToCheck)
  if(valueToCheck > 100) {
    alert("WINNER!")
  }
}

isItLongerThanOneHundred(3, "supercalifragelisexpectialadosise")

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array

function sumFirstAndLast(arr) {
  let sumOfFirstAndLast = arr[0] + arr[arr.length - 1]
  console.log(sumOfFirstAndLast)
}

sumFirstAndLast([3,6,2,1,9,27])

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function. 

const namesList = ["Sarah", "John", "Jody"]

function addToList(name) {
  namesList.push(name)
  console.log(namesList)
  console.log(namesList.indexOf(name) + 1)
}

addToList("Adam")
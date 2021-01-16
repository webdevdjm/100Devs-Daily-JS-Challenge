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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers. 

// Review our last practice problem from last class if you need some ideas.

function onlyOddNums(arr) {
  let oddArr = []
  for (let i=0; i < arr.length; i++) {
    if(arr[i] % 2 != 0) {
      oddArr.push(arr[i])
    }
  }
  // NOT working ?? why
  // arr.forEach(function(item) {
  //   if(item % 2 === 0) {
  //     console.log(item)
  //     oddArr.push(arr[item])
  //   }
  // })
  return oddArr
}

console.log(onlyOddNums([1,2,5,6,9,11,14,17,18,20]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Please create a function that takes in a number. Print all the numbers from 1 to that number in the console, but skip any number that when multiplied by three is divisible by 2.

function weirdCounter(num) {
  for(let i=1; i<=num; i++) {
    if(!((i * 3) % 2 === 0)) {
      console.log(i)
    }
    
  }
}

weirdCounter(27)
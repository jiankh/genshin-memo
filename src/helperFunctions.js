import { characters } from "./Data";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArray(numOfChracters, min, max) {
    let numbers = new Set()
    while (numbers.size < numOfChracters) {
    numbers.add(getRandomIntInclusive(min,max))
    }
    
    return Array.from(numbers)
}

function makeCharactersObj(numOfChracters, min, max) {
    const arrayNums = getRandomArray(numOfChracters, min, max);
    let newArrCharacters = [];
    arrayNums.forEach(num => {
        newArrCharacters.push(characters[num])
    })

    return newArrCharacters
}

function makeDisplayCardsArray(arrayOfClicked, arrayOfUnclicked) {
    let arrayOfCardsToBeDisplayed = []
    
    if (arrayOfClicked.length < 4 ) {
        const numberOfUnclickedNeeded = 5 - arrayOfClicked.length 
        const arrayOfNumbersForIndexes =  getRandomArray(numberOfUnclickedNeeded, 0 , arrayOfUnclicked.length)
        arrayOfNumbersForIndexes.forEach(num => {
            arrayOfCardsToBeDisplayed.push(arrayOfUnclicked[num])
        })
        arrayOfClicked.forEach(char => {
            arrayOfCardsToBeDisplayed.push(char)
        })
    } else {
        const arrayOfIndexesForClicked = getRandomArray(4, 0, arrayOfClicked.length)
        arrayOfIndexesForClicked.forEach(num => {
            arrayOfCardsToBeDisplayed.push(arrayOfClicked[num])
        })
        const indexOfOneUnclicked = getRandomArray(1, 0, arrayOfUnclicked.length)
        arrayOfCardsToBeDisplayed.push(arrayOfUnclicked[indexOfOneUnclicked[0]])
    }

    return arrayOfCardsToBeDisplayed
}

// const characters = makeCharactersObj(7,0,24)
// let arrayOfUnclicked = characters
// let arrayOfClicked = []

function checkIfClicked(e , arrayOfClicked) {
    const clickedID = e.target.id
    return arrayOfClicked.some((obj) => obj.id === clickedID)
}










export {makeCharactersObj,
        makeDisplayCardsArray}


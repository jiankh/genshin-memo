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

function shuffleArray(arr) {
    return arr.map(value => ({value, sort: Math.random() })).sort((a,b) => a.sort - b.sort).map(({value}) => value)
}



//MAIN GAME LOGIC
function makeDisplayCardsArray(arrayOfClicked, arrayOfUnclicked) {
    if (arrayOfUnclicked.length === 0 ) { return }
    
    let arrayOfCardsToBeDisplayed = []
    console.log(arrayOfClicked)
    console.log(arrayOfUnclicked)
    
    
    if (arrayOfClicked.length < 4 ) {
        const numberOfUnclickedNeeded = 5 - arrayOfClicked.length 
        // console.log(`number of unclicked needed ${numberOfUnclickedNeeded}`)
        const arrayOfNumbersForIndexes =  getRandomArray(numberOfUnclickedNeeded, 0 , arrayOfUnclicked.length-1)
        // console.log(`array of random indexes ${arrayOfNumbersForIndexes}`)
        arrayOfNumbersForIndexes.forEach(num => {
            arrayOfCardsToBeDisplayed.push(arrayOfUnclicked[num])
        })
        //ADDING THE the rest of the clicked.
        arrayOfClicked.forEach(char => {
            arrayOfCardsToBeDisplayed.push(char)
        })


        // const unclickedShuffledArr = shuffleArray(arrayOfUnclicked)
        // const numberOfClickedNeeded = 5 - numberOfUnclickedNeeded
        // for (let i=0; i<numberOfClickedNeeded; i++) {
        //     arrayOfCardsToBeDisplayed.push(unclickedShuffledArr[i])
        // }

        //after round 4 I need 4 random from clciked arr
    } else {
        const arrayOfIndexesForClicked = getRandomArray(4, 0, arrayOfClicked.length-1)
        console.log(`array of clicked ${arrayOfIndexesForClicked}`)
        arrayOfIndexesForClicked.forEach(num => {
            arrayOfCardsToBeDisplayed.push(arrayOfClicked[num])
        })
        // const indexOfOneUnclicked = getRandomArray(1, 0, arrayOfUnclicked.length) //either 1 or two bc there will only be 1 or 2 left from 7
        arrayOfCardsToBeDisplayed.push(arrayOfUnclicked[0])
    }



    return shuffleArray(arrayOfCardsToBeDisplayed)
}

// const characters = makeCharactersObj(7,0,24)
// let arrayOfUnclicked = characters
// let arrayOfClicked = []

function checkIfClicked(id , arrayOfClicked) {
    return arrayOfClicked.some((obj) => obj.id === parseInt(id))
}












export {makeCharactersObj,
        makeDisplayCardsArray,
        checkIfClicked}


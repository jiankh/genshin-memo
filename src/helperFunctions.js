import { characters } from "./Data";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArray() {
    let numbers = new Set()
    while (numbers.size < 10) {
    numbers.add(getRandomIntInclusive(0,24))
    }
    
    return Array.from(numbers)
}

function makeCharactersObj() {
    const arrayNums = getRandomArray();
    let newArrCharacters = [];
    arrayNums.forEach(num => {
        newArrCharacters.push(characters[num])
    })

    return newArrCharacters
}



export {makeCharactersObj}



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArray() {
    let numbers = new Set()
    while (numbers.length < 10) {
    numbers.push(getRandomIntInclusive(0,24))
    }
    return numbers
}


console.log(getRandomArray())
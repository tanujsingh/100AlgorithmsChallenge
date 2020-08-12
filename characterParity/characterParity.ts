function characterParity(symbol: string): string {
    
    return isNaN(parseInt(symbol)) ? 'Not a Digit' : parseInt(symbol) % 2 === 0 ? 'Even' : 'Odd'
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))

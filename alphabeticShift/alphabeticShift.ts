function alphabeticShift(inputString: string): string {
    let outputString = ''
    let newAlphabetCode = 0
    let alphabetArray = inputString.split('')
    
    alphabetArray.forEach((alphabet: string) => {
        newAlphabetCode = alphabet !== 'z' ? alphabet.charCodeAt(0) + 1 : alphabet.charCodeAt(0) - 25
        outputString += String.fromCharCode(newAlphabetCode)
    })

    return outputString 
}

console.log(alphabeticShift('crazy'));
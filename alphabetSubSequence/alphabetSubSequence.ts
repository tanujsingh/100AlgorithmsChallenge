function alphabetSubsequence(s: string): boolean {
    let inSequence = false
    let individualChar: string[] = s.split('')

    for (let i = 1; i < individualChar.length; i++) {
        inSequence = individualChar[i].charCodeAt(0) > individualChar[i-1].charCodeAt(0) ? true : false
        
        if (inSequence === false) {
            break
        }
    }

    return inSequence 
}

console.log(alphabetSubsequence('zab')) // false
console.log(alphabetSubsequence('effg')) // false
console.log(alphabetSubsequence('cdce')) // false
console.log(alphabetSubsequence('ace')) // true
console.log(alphabetSubsequence('bxz')) // true

// Set() -- It only takes different elements and not duplicates.
// E.g. -- new Set(charValues) will only takes Characters with different code.


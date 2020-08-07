function almostIncreasingSequence(sequence: number[]): boolean {
    
    for (let i = sequence.length - 1; i >= 0; i--) {
        let temp = 0    // act as counter

        let x = sequence.splice(i,1)
    
        // Gives you either increasing or decreasing sequence possibility
        const direction = sequence[1] - sequence[0]    
        for (let j = 0; j < sequence.length; j++) {
            if (direction * (sequence[j+1] - sequence[j]) <= 0) {
                temp++;
            }
        }

        // To verify that sequence is increasing 
        if (temp === 0 && sequence[1] > sequence[0]) {
            return true
        } 
        
        // To obtain the original array
        sequence.splice(i,0,x[0])
    }

    return false
    
}

console.log(almostIncreasingSequence([1, 3, 2, 1])); // false
console.log(almostIncreasingSequence([1, 3, 2])); // true
console.log(almostIncreasingSequence([3, 5, 67, 98, 3])); // true
console.log(almostIncreasingSequence([4, 3, 5, 67, 98, 3])); // false
console.log(almostIncreasingSequence([1, 4, 2, 3])); // true
console.log(almostIncreasingSequence([10, 13, 2, 9])); // false
function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxDifference = Math.abs(inputArray[1] - inputArray[0])

    for (let i = 1; i < inputArray.length; i++) {        
        let difference = Math.abs(inputArray[i - 1] - inputArray[i])
        if (difference > maxDifference) {
            maxDifference = difference
        }
    }
    
    return maxDifference
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0, 6, 8, 15]));
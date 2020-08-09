function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let maxSum = 0
    let sum = 0

    // Method 1
    // for (let i = 0; i < inputArray.length; i++) {
    //     let sum = 0

    //     for (let j = i; j < i + k; j++) {
    //         sum += inputArray[j]
    //     }

    //     if (sum > maxSum) {
    //         maxSum = sum
    //     }
    // }

    // Method 2 (better)
    for (let i = 0; i < k; i++) {
        sum += inputArray[i]
    }

    maxSum = sum

    for (let i = k; i < inputArray.length; i++) {
        sum -= inputArray[i - k]
        sum += inputArray[i]

        if (sum > maxSum) {
            maxSum = sum
        }
    }

    return maxSum
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
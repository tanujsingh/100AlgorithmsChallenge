function adjacentElementsProduct(inputArray: number[]): number {
    let biggerProduct = inputArray[0] * inputArray[1]   //For real case scenario, don't use 0 as the base.
    for (let i = 1; i < inputArray.length - 1; i++) {
        // Solution 1
        // if (inputArray[i-1] * inputArray[i] > inputArray[i] * inputArray[i+1]) {
        //     biggerProduct = inputArray[i-1] * inputArray[i]
        // } else {
        //     biggerProduct = inputArray[i] * inputArray[i+1]
        // }

        // Solution 2
        const product = inputArray[i] * inputArray[i+1]

        biggerProduct = product > biggerProduct ? product : biggerProduct
    }
    return biggerProduct
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
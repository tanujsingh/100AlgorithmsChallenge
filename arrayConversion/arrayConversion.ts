function arrayConversion(inputArray: number[]): number {
    let sumProducts: number[] = []

    for (let i = 0; i <= inputArray.length; i++) {
        
        for (let j = 0; j < inputArray.length; j += 2) {
        i % 2 === 0 ? sumProducts.push(inputArray[j] + inputArray[j + 1]) : sumProducts.push(inputArray[j] * inputArray[j + 1])
        }
        
        inputArray = sumProducts
        sumProducts = []
    }
    return inputArray[0]
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])); // 186
console.log(arrayConversion([1, 2, 3, 4])); // 21
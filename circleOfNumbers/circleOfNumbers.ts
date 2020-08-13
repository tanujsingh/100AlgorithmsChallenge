function circleOfNumbers(n: number, firstNumber: number): number {

    if (firstNumber < n / 2) {
        return firstNumber + n / 2 
    } else {
        return firstNumber - n / 2
    }
}

console.log(circleOfNumbers(10, 2));
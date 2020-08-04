function addTwoDigits(n: any): number {
    // const arr = n.toString().split('')
    // Solution 1
    // let sum = 0
    
    // arr.forEach((num: string) => {
    //     sum += parseInt(num)
    // })
    // return sum

    // Solution 2
//   return arr.reduce((a: String, b: String) => {
//     return parseInt(a) + parseInt(b)
// })

    //Solution 3
    // return parseInt(arr[0]) + parseInt(arr[1])

    //Solution 4
    return n % 10 + Math.floor(n / 10)
}

console.log(addTwoDigits(29));
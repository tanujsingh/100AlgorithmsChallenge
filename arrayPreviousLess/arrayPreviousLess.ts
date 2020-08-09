function arrayPreviousLess(items: number[]): number[] {
    let newArray: number[] = [-1]
    for (let i = 1; i < items.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (items[j] < items[i]) {
                newArray.push(items[j])
                break
            } else if (j === 0) {
                newArray.push(-1)
            }
        }
        
    }
    return newArray
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
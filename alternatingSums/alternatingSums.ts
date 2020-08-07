function alternatingSums(a: number[]): number[] {
    let evenWeight = 0
    let oddWeight = 0

    a.forEach((num, index) => {
        if (index % 2 === 0) {
            oddWeight += num 
        } else {
            evenWeight += num
        }
    })

    return [oddWeight, evenWeight]
}
    

console.log(alternatingSums([50, 60, 60, 45, 70]))
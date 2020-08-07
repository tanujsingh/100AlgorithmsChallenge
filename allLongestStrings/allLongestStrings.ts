function allLongestStrings(inputArray: string[]): string[] {
    let outputArray = []
    let longestLength = 0

   inputArray.forEach((word: string) => {longestLength = longestLength > word.length ? longestLength : word.length})

   inputArray.forEach((word: string) {
       if (word.length === longestLength) {
           outputArray.push(word)
       }
   })

    return outputArray
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
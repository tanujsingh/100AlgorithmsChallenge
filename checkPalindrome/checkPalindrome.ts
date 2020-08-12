function checkPalindrome(inputString: string): boolean {
    inputString = inputString.toLowerCase()
    const reverseString = inputString.split('').reverse().join('')

    return inputString === reverseString
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));

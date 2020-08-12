function isCaseInsensitivePalindrome(inputString: string): boolean {
    inputString = inputString.toLowerCase()
    const palindrome = inputString.split('').reverse().join('')

    if (palindrome === inputString) {
        return true
    }

    return false

}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
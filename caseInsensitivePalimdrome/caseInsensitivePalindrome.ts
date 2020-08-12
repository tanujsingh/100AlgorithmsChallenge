function isCaseInsensitivePalindrome(inputString: string): boolean {
    inputString = inputString.toLowerCase()
    const palindrome = inputString.split('').reverse().join('')

    return palindrome === inputString

}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
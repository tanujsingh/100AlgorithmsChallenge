function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let bothEquallyStrong = false
    
    const yourStrongestArm = yourLeft > yourRight ? yourLeft : yourRight
    const yourWeakestArm = yourLeft < yourRight ? yourLeft : yourRight
    
    const friendsStrongestArm = friendsLeft > friendsRight ? friendsLeft : friendsRight
    const friendsWeakestArm = friendsLeft < friendsRight ? friendsLeft : friendsRight
    
    bothEquallyStrong = yourStrongestArm === friendsStrongestArm && yourWeakestArm === friendsWeakestArm ? true : false

    return bothEquallyStrong
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))

function addBorder(picture: string[]): string[] {
    const wall = '*'.repeat(picture[0].length + 2)  //string.prototype.repeat(count)
    
    picture.push(wall)  // push an element at the end of an array
    picture.unshift(wall)   // push an element at the front of an array

    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*')    // string.prototype.concat(element, concat at the end)
    }

    return picture

}

console.log(addBorder(["abc", "ded"]));
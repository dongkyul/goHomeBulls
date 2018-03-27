// maps[level][row][col]
const MAP_CODE = {
    block: 1, // this is background
    wall: 2, // this is just wall
    bull: 3, //this is actually the box object which we can push
    house: 4, // this is the goal object
    man: 5, // this is the character we use
    boxedBull: 6, // this is the object after pushing bull to the house
    manBall: 7,
}
const CONFIG = {
    blockWidth: 40,
}
window.boxMaps = [
    // 1
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 2, 2, 2, 1, 1, 1, 1,],
        [1, 1, 1, 2, 4, 2, 1, 1, 1, 1,],
        [1, 1, 1, 2, 3, 2, 2, 2, 2, 1,],
        [1, 2, 2, 2, 1, 1, 3, 4, 2, 1,],
        [1, 2, 4, 3, 1, 5, 2, 2, 2, 1,],
        [1, 2, 2, 2, 2, 3, 2, 1, 1, 1,],
        [1, 1, 1, 1, 2, 4, 2, 1, 1, 1,],
        [1, 1, 1, 1, 2, 2, 2, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    ],
    // 2
    [
        [2, 2, 2, 2, 2, 1, 1, 1, 1, 1,],
        [2, 5, 1, 1, 2, 1, 1, 1, 1, 1,],
        [2, 1, 3, 3, 2, 1, 2, 2, 2, 1,],
        [2, 1, 3, 1, 2, 1, 2, 4, 2, 1,],
        [2, 2, 2, 1, 2, 2, 2, 4, 2, 1,],
        [1, 2, 2, 1, 1, 1, 1, 4, 2, 1,],
        [1, 2, 1, 1, 1, 2, 1, 1, 2, 1,],
        [1, 2, 1, 1, 1, 2, 2, 2, 2, 1,],
        [1, 2, 2, 2, 2, 2, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    ],
    // 3
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 2, 2, 2, 2, 2, 2, 2, 1, 1,],
        [1, 2, 1, 1, 1, 1, 1, 2, 2, 2,],
        [2, 2, 3, 2, 2, 2, 1, 1, 1, 2,],
        [2, 1, 5, 1, 3, 1, 1, 3, 1, 2,],
        [2, 1, 4, 4, 2, 1, 3, 1, 2, 2,],
        [2, 2, 4, 4, 2, 1, 1, 1, 2, 1,],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    ],
]
export function moveGhost(ghost, level) {

    const possibilities = determinePossibilities(ghost, level)

    const keys = Object.keys(possibilities)

    const randomIndex = Math.floor(Math.random() * keys.length)

    return possibilities[keys[randomIndex]](ghost.posX, ghost.posY)
}

function determinePossibilities(ghost, level) {
    const result = {}

    if (level[ghost.posY][ghost.posX - 1] === false) {
        result.goLeft = (oldX, oldY) => { return { posX: oldX - 1, posY: oldY } }
    }

    if (level[ghost.posY][ghost.posX + 1] === false) {
        result.goRight = (oldX, oldY) => { return { posX: oldX + 1, posY: oldY } }
    }

    if (level[ghost.posY - 1][ghost.posX] === false) {
        result.goUp = (oldX, oldY) => { return { posX: oldX, posY: oldY - 1 } }
    }

    if (level[ghost.posY + 1][ghost.posX] === false) {
        result.goDown = (oldX, oldY) => { return { posX: oldX, posY: oldY + 1 } }
    }

    return result

}
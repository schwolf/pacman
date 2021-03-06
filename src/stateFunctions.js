import { moveGhost } from './ghostAI'

export function getStateAfterGhostMoved(state, {level}) {
    const newPos = moveGhost(state.ghost, level)

    const newState = Object.assign({}, { ghost: newPos })

    return newState
}

export function getStateAfterMovedPacman(state, {level}, keyCode) {
    const { posX, posY } = state.pacman
    const newPos = Object.assign({}, state.pacman)

    // todo low level zeugs auslagern wie bei getStateAfterGhostMoved
    switch (keyCode) {
        // left arrow
        case 37:
            if (level[posY][posX - 1] === false) {
                newPos.posX = posX - 1
            }
            break
        // up arrow
        case 38:
            if (level[posY - 1][posX] === false) {
                newPos.posY = posY - 1
            }
            break
        // right arrow
        case 39:
            if (level[posY][posX + 1] === false) {
                newPos.posX = posX + 1
            }
            break
        // down arrow
        case 40:
            if (level[posY + 1][posX] === false) {
                newPos.posY = posY + 1
            }
            break
        default:
            break
    }

    const newState = Object.assign({}, { pacman: newPos })

    return newState
}
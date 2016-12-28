import React from 'react'
import pacman from './pac.png'

export default function (props) {
    console.log(props.posX + '-' + props.posY)

    const style = {
        position: 'absolute',
        top: `${props.posY * 50}px`,
        left: `${props.posX * 50}px`,
        width: '50px',
        height: '50px'
    }
    return (
        <img src={pacman} alt='O' style={style} />
    )
}
import React from 'react'
import ghost from './ghost.png'

export default function (props) {

    const style = {
        position: 'absolute',
        top: `${props.posY * 50}px`,
        left: `${props.posX * 50}px`,
        width: '50px',
        height: '50px'
    }
    return (
        <img src={ghost} alt='G' style={style} />
    )
}
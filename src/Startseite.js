import React from 'react'
import logo from './pacman.png'
export default function (props) {
    if (!props.isVisible) {
        return null
    }

    return (
        <div>
            <h1>PA<img src={logo} className="C" alt="logo" />MAN</h1>
            <div><button onClick={props.onStartPlay}>Play</button></div>
            <div><button>Levels</button></div>
        </div>
    )
}
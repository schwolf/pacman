import React from 'react'
import Ladeanzeige from './Ladeanzeige'
import logo from './pacman.png'

export default function (props) {
    if (!props.isVisible) {
        return null
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to Pacman</h1>
            <Ladeanzeige onLoadFinished={props.onLoadFinished} />
        </div>
    )
}

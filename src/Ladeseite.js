import React from 'react'
import Ladeanzeige from './Ladeanzeige'
import Logo from './Logo'

export default function (props) {
    if (!props.isVisible) {
        return null
    }

    return (
        <div>
            <Logo animated />
            <h1>Welcome to Pacman</h1>
            <Ladeanzeige onLoadFinished={props.onLoadFinished} />
        </div>
    )
}

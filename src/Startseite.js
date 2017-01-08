import React from 'react'
import Logo from './Logo'
import Button from './Button'

export default function (props) {
    if (!props.isVisible) {
        return null
    }

    return (
        <div>
            <h1>PA<Logo small />MAN</h1>
            <div><Button onClick={props.onStartPlay}>Play</Button></div>
            <div><Button>Levels</Button></div>
        </div>
    )
}
import React from 'react'
import ghost from './ghost.png'
import styled from 'styled-components'

const Img = styled.img`
        position: absolute;
        top: ${props => props.posY * 50}px;
        left: ${props => props.posX * 50}px;
        width: 50px;
        height: 50px;`

export default (props) => <Img alt='X' src={ghost} {...props} />

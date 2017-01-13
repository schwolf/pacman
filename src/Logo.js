import React from 'react'
import styled from 'styled-components'
import logo from './pacman.png'

const Logo = styled.img`
    height: ${props => props.small ? '40px' : '160px'}
    ${props => props.animated ? 'animation: App-logo-spin infinite 20s linear;' : ''}
`
export default props => <Logo alt='logo' src={logo} {...props} />


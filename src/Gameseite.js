import React, { Component } from 'react'
import Pacman from './Pacman'
import Ghost from './Ghost'
import { getStateAfterGhostMoved, getStateAfterMovedPacman } from './stateFunctions'

export default class Gameseite extends Component {
    constructor(props) {
        super(props)

        this.state = this.getStartingState()

        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    getStartingState() {
        return {
            pacman: {
                posX: 1,
                posY: 7,
            },
            ghost: {
                posX: 1,
                posY: 1
            }
        }
    }

    componentDidMount() {
        // plain old event listener here...
        document.addEventListener("keydown", this.handleKeyDown);

        this.timer = window.setInterval(() => {
            if (this.props.isVisible) { // todo: bad! refactor with routes!
                this.setState(getStateAfterGhostMoved)
            }
        }, 500)

    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    handleKeyDown(ev) {
        const newState = getStateAfterMovedPacman(this.state, ev.keyCode, this.props.level)
        this.setState(newState)
    }

    render() {
        if (!this.props.isVisible) {
            return null
        }

        if (this.state.pacman.posX === this.state.ghost.posX && this.state.pacman.posY === this.state.ghost.posY) {
            this.props.pacmanCaught()
            return null
        }



        // todo flexbox => http://stackoverflow.com/questions/19026884/flexbox-center-horizontally-and-vertically/33049198#33049198
        return (
            // centered div
            <div style={{ display: 'table', margin: '0 auto', position: 'relative' }}>
                {
                    this.props.level.map(row => {
                        const cells = row.map(cell => {
                            const blockStyle = {
                                width: '50px',
                                height: '50px',
                                float: 'left',
                                backgroundColor: cell === true ? 'grey' : 'black'
                            }

                            return <div style={blockStyle}></div>
                        })

                        cells.push(<div style={{ clear: 'both' }}></div>)
                        return cells
                    })
                }
                <Pacman posX={this.state.pacman.posX} posY={this.state.pacman.posY} />
                <Ghost posX={this.state.ghost.posX} posY={this.state.ghost.posY} />
            </div >
        )
    }
}
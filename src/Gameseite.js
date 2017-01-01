import React, { Component } from 'react'
import Pacman from './Pacman'
import Ghost from './Ghost'
import { moveGhost } from './ghostAI'

export default class Gameseite extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pacman: {
                posX: 1,
                posY: 7,
            },
            ghost: {
                posX: 1,
                posY: 1

            }
        }

        this.handleKeyDown = this.handleKeyDown.bind(this)


    }

    componentDidMount() {
        // plain old event listener here...
        document.addEventListener("keydown", this.handleKeyDown);

        this.timer = window.setInterval(() => {
            // todo: bad! refactor with routes!
            if (this.props.isVisible) {
                this.setState({ ghost: moveGhost(this.state.ghost, this.props.level) })
            }
        }, 1000)

    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    handleKeyDown(ev) {
        const { posX, posY } = this.state.pacman

        switch (ev.keyCode) {
            // left arrow
            case 37:
                if (this.props.level[posY][posX - 1] === false) {
                    this.setState({
                        pacman: {
                            posX: posX - 1,
                            posY: posY
                        }
                    })
                }


                break
            // up arrow
            case 38:
                if (this.props.level[posY - 1][posX] === false) {
                    this.setState({
                        pacman: {
                            posX: posX,
                            posY: posY - 1
                        }
                    })
                }
                break
            // right arrow
            case 39:
                if (this.props.level[posY][posX + 1] === false) {
                    this.setState({
                        pacman: {
                            posX: posX + 1,
                            posY: posY
                        }
                    })
                }
                break
            // down arrow
            case 40:
                if (this.props.level[posY + 1][posX] === false) {
                    this.setState({
                        pacman: {
                            posX: posX,
                            posY: posY + 1
                        }
                    })
                }
                break
            default:
                break
        }
    }

    render() {
        if (!this.props.isVisible) {
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
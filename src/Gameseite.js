import React, { Component } from 'react'
import Pacman from './Pacman'

export default class Gameseite extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pacman: {
                posX: 1,
                posY: 7,
            }
        }

        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    componentDidMount() {
        // plain old event listener here...
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown(ev) {
        switch (ev.keyCode) {
            // left arrow
            case 37:
                this.setState({
                    pacman: {
                        posX: this.state.pacman.posX - 1,
                        posY: this.state.pacman.posY
                    }
                })
                break
            // up arrow
            case 38:
                this.setState({
                    pacman: {
                        posX: this.state.pacman.posX,
                        posY: this.state.pacman.posY - 1
                    }
                })
                break
            // right arrow
            case 39:
                this.setState({
                    pacman: {
                        posX: this.state.pacman.posX + 1,
                        posY: this.state.pacman.posY
                    }
                })
                break
            // down arrow
            case 40:
                this.setState({
                    pacman: {
                        posX: this.state.pacman.posX,
                        posY: this.state.pacman.posY + 1
                    }
                })
                break
            default:
                break
        }
    }

    render() {
        if (!this.props.isVisible) {
            return null
        }

        const lvl =
            `XXXXXXXXXXXXX
X    X      X
X XX XX XXX  
X     X XXX X
X XXX X     X
X X   X XXX X
X X X       X
X XXXXXXXXXXX`

        const field = createFieldArray(lvl)

        // todo flexbox => http://stackoverflow.com/questions/19026884/flexbox-center-horizontally-and-vertically/33049198#33049198
        return (
            // centered div
            <div style={{ display: 'table', margin: '0 auto', position: 'relative' }}>
                {
                    field.map(row => {
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
            </div >
        )

        function createFieldArray(str) {
            const result = []
            const lines = str.split('\n')
            lines.forEach((line, lineIndex) => {
                result[lineIndex] = []
                line.split('').forEach((field) => {
                    result[lineIndex].push(field === 'X')
                })
            })
            return result
        }
    }
}
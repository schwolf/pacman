import React, { Component } from 'react'
import './App.css'
import Ladeseite from './Ladeseite'
import Startseite from './Startseite'
import Gameseite from './Gameseite'

class App extends Component {
  constructor(props) {
    super(props)

    // todo react router instead of isVisible props

    this.state = {
      isLadeseiteVisible: true,
      isStartseiteVisible: false,
      isGameseiteVisible: false
    }

    this.handleLoadFinished = this.handleLoadFinished.bind(this)
    this.handleStartPlay = this.handleStartPlay.bind(this)
  }

  render() {

    const lvlAsString =
      `XXXXXXXXXXXXX
X    X      X
X XX XX XXX  
X     X XXX X
X XXX X     X
X X   X XXX X
X X X       X
X XXXXXXXXXXX`

    const level = this.createLevel(lvlAsString)

    return (
      <div className="App">
        <Ladeseite isVisible={this.state.isLadeseiteVisible} onLoadFinished={this.handleLoadFinished} />
        <Startseite isVisible={this.state.isStartseiteVisible} onStartPlay={this.handleStartPlay} />
        <Gameseite isVisible={this.state.isGameseiteVisible} level={level} />
      </div>
    );
  }

  handleLoadFinished() {
    this.setState({
      isLadeseiteVisible: false,
      isStartseiteVisible: true
    })
  }

  handleStartPlay() {
    this.setState({
      isStartseiteVisible: false,
      isGameseiteVisible: true
    })
  }

  createLevel(str) {
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

export default App;

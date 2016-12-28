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
    return (
      <div className="App">
        <Ladeseite isVisible={this.state.isLadeseiteVisible} onLoadFinished={this.handleLoadFinished} />
        <Startseite isVisible={this.state.isStartseiteVisible} onStartPlay={this.handleStartPlay} />
        <Gameseite isVisible={this.state.isGameseiteVisible} />
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
}

export default App;

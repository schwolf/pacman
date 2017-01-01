import React, { Component } from 'react'

export default class Ladeanzeige extends Component {
    constructor(props) {
        super(props)
        this.state = { fortschritt: 0 }
    }

    componentDidMount() {

        const timer = window.setInterval(() => {
            if (this.state.fortschritt < 100) {
                const newFortschritt = this.state.fortschritt + 1;
                this.setState({ fortschritt: newFortschritt })
            }
            else {
                this.props.onLoadFinished()
                clearInterval(timer)
            }

        }, 4)
    }

    render() {
        return (
            <div>
                {this.state.fortschritt} %
            </div>
        )

    }

}

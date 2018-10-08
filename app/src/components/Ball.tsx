import React, { Component } from 'react'
import { Props, State, Style } from '../types/BallTypes'
import d2w from '../helpers/digit2word'
import './ball.scss'

class Ball extends Component<Props, State> {
  private style: Style

  constructor(props: Props) {
    super(props)

    let ballType

    if (props.ball === 0) {
      ballType = 'cue'
    } else if (props.ball >= 1 && props.ball <= 7) {
      ballType = 'solid'
    } else if (props.ball >= 9 && props.ball <= 15) {
      ballType = 'stripe'
    } else {
      ballType = 'black'
    }

    this.state = {
      ...props,
      ballType
    }

    this.style = {
      left: this.state.x,
      top: this.state.y
    }
  }

  impact(angle: number, force: number) {
    const d: number = (angle + 180) % 360
    const end = this.lineEnd(this.state.x, this.state.y, d, force)
    this.setState({ x: end.x2, y: end.y2 })
  }

  lineEnd(x1: number, y1: number, angle: number, length: number) {
    angle = (angle * Math.PI) / 180
    const x2 = x1 + length * Math.sin(angle)
    const y2 = y1 + length * Math.cos(angle)
    return { x2, y2 }
  }

  render() {
    return (
      <div
        style={this.style}
        className={`ball ${d2w(this.state.ball)} ${this.state.ballType}`}
      />
    )
  }
}

export default Ball

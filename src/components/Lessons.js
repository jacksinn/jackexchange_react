import React, { Component } from 'react'

export default class Lessons extends Component {
  render() {
    return (
      <div>
        <p>Hi I'm {this.props.name}</p>
        <p>{this.props.xyz}</p>
      </div>
    )
  }
}
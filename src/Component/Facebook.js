import React, { Component } from 'react'
import Navbar from './Navbar'
import MainBody from './MainBody'

export class Facebook extends Component {
  render() {
    return (
      <div id="facebook-main">
        <Navbar/>
        <MainBody/>
      </div>
    )
  }
}

export default Facebook

import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'


class Profile extends Component {
  static getInitialProps ({query: {data}}) {
      return {postId: data}
  }
  render () {
    return (
      <div>
        <h1>My blog post #{this.props.postId}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    )
  }
}

export default Profile

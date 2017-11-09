import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';

export default class PostsIndex extends Component {
  render() {
    return (
      <div>
        <Header as='h2' content='Blog list' />
        <Segment>One</Segment>
        <Segment>Two</Segment>
      </div>
    )
  }
}

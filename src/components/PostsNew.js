import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Button } from 'semantic-ui-react';

class PostsNew extends Component {
  render() {
    return (
      <div>
        <Header as='h2' content='New Post' />  
        <Link to='/'>
          <Button content='Cancel' color='red' icon='left arrow' labelPosition='left' />
        </Link>
      </div>
    )
  }
}

export default PostsNew
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ComponentForm from '../components/form/ComponentForm';
import { createPost } from '../actions';
import { Button } from 'semantic-ui-react';

class PostsNew extends Component {
  constructor(props) {
    super(props)
    // This binding is necessary to make `this` work in the callback
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(values) {
    console.log(values);
    this.props.createPost(values)
  };

  render() {
    return (
      <div>
        <Link to='/'>
          <Button content='Cancel' color='red' icon='left arrow' labelPosition='left' />
        </Link>
        <ComponentForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null,{ createPost })(PostsNew)

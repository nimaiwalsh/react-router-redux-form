import React, { Component } from 'react';
import ComponentForm from '../components/form/ComponentForm';

export default class PostsNew2 extends Component {

  onSubmit(values) {
    console.log(values);
  };

  render() {
    return (
      <ComponentForm onSubmit={this.onSubmit} />
    );
  }
}
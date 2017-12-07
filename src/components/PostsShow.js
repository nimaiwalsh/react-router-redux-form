import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';

import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    //This.props.match.params.id - passed from React Router
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }

  onDeleteClick() {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      //Router props used to redirect user to another page
      this.props.history.push('/')
    })
  }

  render() {
    const { post } = this.props;

    //Display loading screen on initial render and wait for fetchPost()
    if(!post) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        <Link to='/'>
            <Button content='Back' icon='left arrow' labelPosition='left' />
        </Link>
        <Button 
          onClick={this.onDeleteClick.bind(this)}
          content='Delete Post' 
          color='red' 
          icon='delete' 
          labelPosition='left' 
          floated='right'
        />
        <Header as='h2' content={post.title} attached='top'>
        </Header>
        <Segment attached>
          <p>Categories: {post.categories}</p>
          <p>{post.content}</p>
        </Segment>
      </div>
    )
  }
}

//Return only the required single post from state - use ownProps param
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)
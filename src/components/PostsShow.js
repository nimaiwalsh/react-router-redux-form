import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Segment, Button } from 'semantic-ui-react';

import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    //This.props.match.params.id - passed from React Router
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }

  render() {
    const { post } = this.props;
    
    //Post a loading screen on initial render and watch for fetchPost()
    if(!post) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        <Link to='/'>
            <Button content='Back' color='red' icon='left arrow' labelPosition='left' />
        </Link>
        <Header as='h2' content={post.title} attached='top'/>
        <Segment attached>
          <p>{post.categories}</p>
          <p>{post.content}</p>
        </Segment>
      </div>
    )
  }
}

//Return only the required single post props/state - use ownProps param
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)
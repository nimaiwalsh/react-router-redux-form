import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; //Think of link as an Anchor tag
import { fetchPosts } from '../actions';
import { Header, Segment, Button } from 'semantic-ui-react';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  renderPosts() {
    const posts = this.props.posts;
    const postlist = Object.keys(posts)
    return postlist.map((key) => {
        return (
          <Segment key={posts[key].id}>
            <Link to={`/posts/${posts[key].id}`}>
              <Header as='h3'>{posts[key].title}</Header>
            </Link>
            <p>{posts[key].content}</p>
          </Segment>     
        )
    })
  }

  render() {
    return (
      <div>
        <Header as='h2' content='Blog list' />
        <Link to='posts/new'>
          <Button content='New Post' color='green' icon='right arrow' labelPosition='right' />
        </Link>
        {this.renderPosts()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { posts: state.posts }
}
//Connect Action Creator between the Component and Redux
export default connect(mapStateToProps, { fetchPosts })(PostsIndex)

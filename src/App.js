import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import MenuTop from './components/MenuTop'
import PostsIndex from './containers/PostsIndex';
import PostsShow from './containers/PostsShow';
import { Container, Grid, Segment, Header } from 'semantic-ui-react';

class App extends Component {
  style = {
    h1: {
      marginTop: '2em',
    },
  }
  render() {
    return (
      <div className="App">
        <Segment>
          <Container>
            <MenuTop />
          </Container>
        </Segment>
        <Segment vertical style={{minHeight: '500px', padding: '2em 0em'}}> 
          <BrowserRouter>
            <Container> 
              <Route path='/' component={PostsIndex} />
              <Route path='/posts/:id' component={PostsShow} />
            </Container>
          </BrowserRouter>     
        </Segment>
      </div>
    );
  }
}

export default App;

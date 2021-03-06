import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';

import MenuTop from './components/MenuTop'
import PostsIndex from './containers/PostsIndex';
import PostsNew from './components/PostsNew';
import PostsShow from './containers/PostsShow';

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
              <Switch>
                <Route path='/posts/new' component={PostsNew} /> 
                <Route path='/posts/:id' component={PostsShow} />
                <Route path='/' component={PostsIndex} />
              </Switch>
            </Container>
          </BrowserRouter>     
        </Segment>
      </div>
    );
  }
}

export default App;

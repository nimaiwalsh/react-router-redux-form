import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';

const MenuTop = () => {
  return (
    <Menu fixed='top' size='large'>
      <Container>
        <Menu.Item as='a' active>Blog</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item className='item'>
            <Button as='a'>Log in</Button>
          </Menu.Item>
          <Menu.Item>
            <Button as='a' primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default MenuTop
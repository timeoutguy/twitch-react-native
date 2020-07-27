import React from 'react';
import { Feather, MaterialIcons, Octicons } from '@expo/vector-icons'

import { Container, Avatar, Icons, Icon } from './styles';

const Header = () => {
  return (
    <Container>
      <Avatar source={require('../../images/avatar.png')} />
      <Icons>
        <Icon>
          <Feather name="bell" size={24} color="#555" /> 
        </Icon>
        <Icon>
          <MaterialIcons name="chat-bubble-outline" size={24} color="#555" /> 
        </Icon>
        <Icon>
          <Octicons name="search" size={24} color="#555" /> 
        </Icon>
        
        
      </Icons>
    </Container>
  );
}

export default Header;
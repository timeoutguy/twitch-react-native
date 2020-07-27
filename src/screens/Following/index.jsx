import React from 'react';
import { View } from 'react-native';

import { Container, FollowingText } from './styles';
import FollowedCategories from '../../components/FollowedCategories';
import LiveChannels from '../../components/LiveChannels';

const Following = () => {
  return (
    <Container>
      <FollowingText> Following </FollowingText>
      <FollowedCategories />
      <LiveChannels />
    </Container>
  );
}

export default Following;
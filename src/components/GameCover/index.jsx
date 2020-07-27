import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Text } from 'react-native'

import { Game, Cover, Name, Viewers } from './styles';

const GameCover = ({ image, name, viewers}) => {
  return (
    <Game>
      <Cover source={image} />
      <Name> 
        {name.length >= 17 ? (((name).substring(0, 16-3)) + '...') : name}
      </Name>
      <Viewers>
        <FontAwesome name="circle" color="#ff0000"/>
        <Text> {viewers} </Text>
      </Viewers>
    </Game>
  );
}

export default GameCover;
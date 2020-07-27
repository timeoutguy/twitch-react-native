import React from 'react';
import { View } from 'react-native';

import { Container, Thumb, Infos, StreamTitle, StreamCategory, LanguageBadge, Streamer } from './styles';

import ellipsize from '../../utils/ellipsize'

const ChannelThumb = ({image, title, category, streamer, language}) => {
  return(
    <Container>
      <Thumb source={image} />
      <Infos>
        <StreamTitle> {ellipsize(title, 29)} </StreamTitle>
        <Streamer> {streamer} </Streamer>
        <StreamCategory> {ellipsize(category, 29)}</StreamCategory>
        <LanguageBadge> Portuguese </LanguageBadge>
      </Infos>
    </Container>
  );
}

export default ChannelThumb;
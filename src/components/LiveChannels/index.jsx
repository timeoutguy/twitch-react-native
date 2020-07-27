import React from 'react';
import { View } from 'react-native';

import { Container, Title } from './styles';
import ChannelThumb from '../ChannelThumb';

import live from './live.jpg';
import xande from './xande.jpg';
import nariz from './nariz.jpg';

const LiveChannels = () => {
  return (
    <Container>
      <Title> LIVE CHANNELS </Title>
      <ChannelThumb 
        image={live}
        title="Codando um clone da twitch.tv" 
        category="Science and Thecnology" 
        streamer="timeoutguy"
      />
      <ChannelThumb 
        image={xande}
        title="PLATINA 2 CANSADO" 
        category="League of Legends" 
        streamer="xandows"
      />
      <ChannelThumb 
        image={nariz}
        title="Live do Nariz" 
        category="Science and Thecnology" 
        streamer="DanielHe4rt"
      />
    </Container>
  )
}

export default LiveChannels;
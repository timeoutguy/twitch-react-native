import React from 'react';

import { Container, Categories, Title, Game, Cover, Name, Viewers } from './styles';
import GameCover from '../GameCover';

import lol from './lol.jpg';
import cs from './cs.jpg';
import cod from './cod.jpg';
import fortnite from './fortnite.jpg';



const FollowedCategories = () => {
  return (
    <>
      <Container>
        <Title> FOLLOWED CATEGORIES </Title>
        <Categories horizontal showsHorizontalScrollIndicator={false}> 
          <GameCover image={lol} name="League of legends" viewers="413.5k"/>
          <GameCover image={cs} name="Counter-Strike: Global Offensive" viewers="228.1k"/>
          <GameCover image={cod} name="Call of Duty: Modern Warfare" viewers="102.7k"/>
          <GameCover image={fortnite} name="Fortnite" viewers="82.2k"/>
        </Categories>
      </Container>
    </>
  );
}

export default FollowedCategories;
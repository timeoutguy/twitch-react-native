import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './Navigation';
import Header from './components/Header';
import { StatusBar } from 'react-native';

export default function App() {
    return (
      <NavigationContainer>
        <Header />
        <Navigation />
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      </NavigationContainer>
    )
}

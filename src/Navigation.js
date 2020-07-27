import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import Following from './screens/Following'
import Discover from './screens/Discover'
import Browse from './screens/Browse'

const Tab = createMaterialBottomTabNavigator();

const icons = {
  Following: {
    lib: Entypo,
    name: 'heart',
  },
  Discover: {
    lib: MaterialCommunityIcons,
    name: 'compass-outline',
  },
  Browse: {
    lib: AntDesign,
    name: 'switcher',
  },
}

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={25} color={color} />
        },
      })}
      barStyle={{
        backgroundColor: "#FFF",
        paddingVertical: 10,
      }}
      activeColor="#6441a4"
      inactiveColor="#17141f"
    >
      <Tab.Screen name="Following" component={Following} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Browse" component={Browse} />
    </Tab.Navigator>
  );
}

export default Navigation;
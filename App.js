import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {M06_Home} from './app/views/M06_Home_routing';
import {M06_Detalls} from './app/views/M06_Detalls_routing';
import { M09_Sqlite } from './app/views/M09_Sqlite';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={M06_Home} />
        <Stack.Screen name="Detall" component={M06_Detalls} />
        <Stack.Screen name="SQLite" component={M09_Sqlite} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


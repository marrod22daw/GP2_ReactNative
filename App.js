import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {M06_Home} from './app/views/M06_Home_routing';
import {M06_Detalls} from './app/views/M06_Detalls_routing';
import { M09_Sqlite } from './app/views/M09_Sqlite';
import { M09_Sqlite_PiB } from './app/views/M09_Sqlite_PiB';
import { M09_Sqlite_Pobl } from './app/views/M09_Sqlite_Pobl';
import { M09_Sqlite_EVida } from './app/views/M09_Sqlite_EVida';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={M06_Home} options={{headerBackTitleVisible: false,headerTitle: '',headerShown: true}}/>
        <Stack.Screen name="Detall" component={M06_Detalls} options={{headerBackTitleVisible: false,headerTitle: '',headerShown: true}}/>
        <Stack.Screen name="SQLite" component={M09_Sqlite} options={{headerBackTitleVisible: false,headerTitle: '',headerShown: true}}/>
        <Stack.Screen name="SQLite_PiB" component={M09_Sqlite_PiB} options={{headerBackTitleVisible: false,headerTitle: '',headerShown: true}}/>
        <Stack.Screen name="SQLite_Pobl" component={M09_Sqlite_Pobl} options={{headerBackTitleVisible: false,headerTitle: '',headerShown: true}}/>
        <Stack.Screen name="SQLite_EVida" component={M09_Sqlite_EVida} options={{headerBackTitleVisible: false,headerTitle: '',headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
/* import { createStackNavigator } from '@react-navigation/stack'; */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import M06_Home_Routing from './app/views/M06_Home_routing';
import {M06_Donacions} from './app/views/M06_Donacions';
import { M09_Sqlite } from './app/views/M09_Sqlite';
import { M09_Sqlite_PiB } from './app/views/M09_Sqlite_PiB';
import { M09_Sqlite_Pobl } from './app/views/M09_Sqlite_Pobl';
import { M09_Sqlite_EVida } from './app/views/M09_Sqlite_EVida';
import M06_Ayuda from './app/views/M06_Ayuda'
/* const Stack = createStackNavigator(); */
const Tab = createBottomTabNavigator();

const homeNom = "Home";
const SqliteNom = "SQLite";
const donacionsNom = "donaciones";
const ayudaNom = "saber más";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       initialRouteName={homeNom}
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
      
          if (rn === homeNom) {
            iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (rn === SqliteNom) {
            iconName = focused ? 'list' : 'list-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (rn === donacionsNom) {
            iconName = focused ? 'donaciones' : 'credit';
            return <Entypo name={iconName} size={size} color={color} />;
          }
          else if (rn === ayudaNom) {
            iconName = focused ? 'saber más' : 'about-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          }

        },
        activeTintColor: 'blue',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70}
      })}
      >
        <Tab.Screen name={homeNom} component={M06_Home_Routing} options={{headerBackTitleVisible: false,headerTitle: '',headerShown: true}}/>
        <Tab.Screen name={SqliteNom} component={M09_Sqlite} options={{headerBackTitleVisible: false,headerTitle: '',headerShown: true}}/>
        <Tab.Screen name={donacionsNom} component={M06_Donacions} options={{headerBackTitleVisible: false,headerTitle: '',headerShown: true}}/>
        <Tab.Screen name={ayudaNom} component={M06_Ayuda} options={{headerBackTitleVisible: false,headerTitle: '',headerShown: true}}/>
        <Tab.Screen name="SQLite_PiB" component={M09_Sqlite_PiB} options={{headerBackTitleVisible: false,headerTitle: '',headerShown: true}}/>
        <Tab.Screen name="SQLite_Pobl" component={M09_Sqlite_Pobl} options={{headerBackTitleVisible: false,headerTitle: '',headerShown: true}}/>
        <Tab.Screen name="SQLite_EVida" component={M09_Sqlite_EVida} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


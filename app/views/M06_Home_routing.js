import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';


/**
 * Classe que hereta de Component i que implementa un component
 * independent en l'app. És un component bàsic sense estils
 * Fa servir routing
 * @version 1.0 23.03.2020
 * @author sergi.grau@fje.edu
 */

const estils = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: '#0f0'
  }
});

export class M06_Home extends React.Component {

  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Benvingut a GP2</Text>
          <Button
            title="Mes info"
            onPress={() => this.props.navigation.navigate('Detall', {
              nom: 'DAW2',
            })}
          />
          <Button
            title="SQL"
            onPress={() => this.props.navigation.navigate('SQLite')}
          />
        </View>
      );

    }
}
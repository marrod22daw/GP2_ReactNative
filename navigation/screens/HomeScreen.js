import * as React from 'react';
import { View, Text } from 'react-native';
import {ImageBackground, StyleSheet} from 'react-native';

const image = {uri: 'https://s1.eestatic.com/2022/03/10/enclave-ods/656194919_222572698_1706x960.jpg'};

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text onPress={() => alert('Benvingut al recopilador de dades de pobresa.')} style={{ fontSize: 26, fontWeight: 'bold' }}>
            Welcome to the poverty data collector.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

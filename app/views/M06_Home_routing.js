import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const image = { uri: 'https://s1.eestatic.com/2022/03/10/enclave-ods/656194919_222572698_1706x960.jpg' };

function M06_Home_Routing({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.logoText}>GP2</Text>
        <View style={styles.overlay}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Text style={styles.overlayText}>
              La pobreza es un problema global que afecta a millones de personas en todo el mundo. 
              Con el fin de combatir este problema, se han creado diversas herramientas y aplicaciones que permiten recoger y mostrar datos estadísticos sobre la pobreza en todo el mundo. 
              Una de estas aplicaciones es una plataforma que recopila información sobre la pobreza en diferentes países y regiones del mundo, y la presenta de manera clara y concisa para que las personas puedan comprender mejor la situación actual. 
              Esta herramienta es de gran utilidad para aquellos interesados en el tema de la pobreza, ya que les permite obtener una visión global de la situación actual, así como de las tendencias y patrones en diferentes partes del mundo. 
              Además, esta aplicación también puede ser útil para investigadores, académicos y responsables de políticas públicas que necesiten datos precisos sobre la pobreza para tomar decisiones informadas y diseñar estrategias efectivas para abordar este problema mundial.
            </Text>
          </ScrollView>
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
  logoText: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    backgroundColor: '#000000c0',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  overlayText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default M06_Home_Routing;

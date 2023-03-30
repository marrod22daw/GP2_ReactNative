import React from "react";
import { StyleSheet, Button, Text, View, ImageBackground } from "react-native";

/**
 * Classe que hereta de Component i que implementa un component
 * independent en l'app. És un component bàsic sense estils
 * Fa servir routing
 * @version 1.0 23.03.2020
 * @author sergi.grau@fje.edu
 */

const image = {
  uri: "https://s1.eestatic.com/2022/03/10/enclave-ods/656194919_222572698_1706x960.jpg",
};

const estils = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: "justify",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    width: "40%",
    backgroundColor: "#696969",
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export class M06_Home extends React.Component {
  render() {
    return (
      <ImageBackground source={image} resizeMode="cover" style={estils.image}>
        <View style={estils.contenidor}>
          <Text style={estils.title}>
            Benvingut a tota l'informació dels diferents països del món
          </Text>
          <Text style={estils.text}>
            L'aplicació compta amb 3 apartats, la pàgina inicial amb
            l'explicació de com utilitzar la pàgina, una taula amb totes les
            dades dels països i un últim apartat per fer donacions per al
            desenvolupament de l'aplicació.
          </Text>
          <Text style={estils.text}>
            Dins la taula podem trobar el nom del país, la seva capital, el PiB,
            la població, l'esperança de vida i per últim la bandera del país. A
            la part superior de la pantalla podem trobar tres botons per poder
            organitzar la informació respecte a diferents paràmetres.
          </Text>
          <Text style={estils.text}>
            L'última pantalla que podem trobar serveix per fer donacions per al
            desenvolupament de l'aplicació. Simplement has d'emplenar les dades
            de nom i email, seleccionar la quantia de diners que has de donar i
            per finalitzar amb un comentari.
          </Text>

          <Button
            title="Dades"
            onPress={() => this.props.navigation.navigate("SQLite")}
            color="#696969"
          />
          <Button
            title="Donacions"
            onPress={() => this.props.navigation.navigate("Donacions")}
            color="#696969"
          />
        </View>
      </ImageBackground>
    );
  }
}

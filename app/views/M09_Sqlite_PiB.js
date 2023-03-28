import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import * as SQLite from "expo-sqlite";
import { ScrollView } from "react-native";
import data from "./paisos.json";

/**
 * Classe que hereta de Component i que treballa amb el
 * component de SQLite. Les dades es mostren per consola per a facilitar l'exercici
 * @version 1.0 23.03.2020
 * @author sergi.grau@fje.edu
 */

const estils = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  paisContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 24,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  paisText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginHorizontal: 16,
    marginVertical: 12,
  },
  capitalText: {
    fontSize: 18,
    color: "#666",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  poblacionText: {
    fontSize: 18,
    color: "#666",
    marginHorizontal: 16,
    marginBottom: 12,
  },
  poblacionText2: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "#666",
    marginHorizontal: 16,
    marginBottom: 12,
  },
  banderaImagen: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export class M09_Sqlite_PiB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: null,
      paisos: [],
    };
    db = SQLite.openDatabase("db.db");
  }

  insertRecordsFromJson() {
    db.transaction((tx) => {
      data.forEach((item) => {
        const { Pais, Capital, PiB, Poblacion, EsperanzaVida, Bandera } = item;
        tx.executeSql(
          "INSERT INTO paisos (Pais, Capital, PiB, Poblacion, EsperanzaVida, Bandera) VALUES (?, ?, ?, ?, ?, ?)",
          [Pais, Capital, PiB, Poblacion, EsperanzaVida, Bandera]
        );
      });
    });
  }

  componentDidMount() {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM paisos order by PiB", [], (_, { rows }) =>
        this.setState({ paisos: rows._array })
      );
    });
  }

  render() {
    const { paisos } = this.state;

    return (
      <View style={estils.container}>
        <View style={estils.header}>
          <Text style={estils.headerText}>PAÍSOS DEL MON</Text>
          <Button
            title="PiB"
            onPress={() => this.props.navigation.navigate('SQLite_PiB')}
          />
          <Button
            title="Població"
            onPress={() => this.props.navigation.navigate('SQLite_Pobl')}
          />
          <Button
            title="Esp. de Vida"
            onPress={() => this.props.navigation.navigate('SQLite_EVida')}
          />
        </View>
        <ScrollView>
          {paisos.map((item) => (
            <View key={item.id} style={estils.paisContainer}>
              <Text style={estils.paisText}>{item.Pais}</Text>
              <Text style={estils.capitalText}>Capital: {item.Capital}</Text>
              <Text style={estils.poblacionText2}>
                PiB: {item.PiB}M €
              </Text>
              <Text style={estils.poblacionText}>
                Població: {item.Poblacion}
              </Text>
              <Text style={estils.poblacionText}>
                Esperança de vida: {item.EsperanzaVida}
              </Text>
              <Image
                source={{ uri: item.Bandera }}
                style={estils.banderaImagen}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

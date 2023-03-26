import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import data from './paisos.json';

/**
 * Classe que hereta de Component i que treballa amb el
 * component de SQLite. Les dades es mostren per consola per a facilitar l'exercici
 * @version 1.0 23.03.2020
 * @author sergi.grau@fje.edu
 */

const estils = StyleSheet.create({
  textPeu: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  peu: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FA0'
  },
});

export class M09_Sqlite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: null,
      paisos: [],
    };
    db = SQLite.openDatabase("db.db");

    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists paisos (id integer primary key not null, Pais text, Capital text);"
      );
    });

    this.insertRecordsFromJson();
  }

  insertRecordsFromJson() {
    db.transaction(tx => {
      data.forEach(item => {
        const { Pais, Capital } = item;
        tx.executeSql("INSERT INTO paisos (Pais, Capital) VALUES (?, ?)", [Pais, Capital]);
      });
    });
  }

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql("SELECT * FROM paisos", [], (_, { rows }) =>
        this.setState({ paisos: rows._array })
      );
    });
  }
  

  render() {
    const { paisos } = this.state;

    return (
      <View style={estils.peu}>
        <Text style={estils.textPeu}> SQLITE </Text>
        {paisos.map(item => (
          <Text key={item.id}>{item.Pais}{item.Capital}</Text>
        ))}
      </View>
    );
  }
}
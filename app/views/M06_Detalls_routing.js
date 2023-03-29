import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const DONATION_OPTIONS = [5, 10, 20];

const estils = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textTransform: "uppercase",
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "#666",
    textAlign: "center",
  },
  input: {
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    width: "100%",
  },
  textarea: {
    height: 150,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "#fff",
    width: "100%",
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "red",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonHover: {
    opacity: 0.8,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  optionText: {
    fontWeight: "bold",
  },
  optionButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginRight: 10,
  },
  optionButtonSelected: {
    backgroundColor: "#ff0000",
    borderColor: "#007bff",
  },
  optionButtonText: {
    color: "#000",
  },
  optionButtonTextSelected: {
    color: "#fff",
  },
});

export class M06_Detalls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      email: "",
      euro: "",
      comentari: "",
      selectedOption: "",
    };
  }

  handleOptionSelect = (option) => {
    this.setState({ selectedOption: option, euro: option.toString() });
  };

  render() {
    return (
      <View style={estils.container}>
        <View style={estils.header}>
          <Text style={estils.headerText}>Donacions</Text>
        </View>
        <TextInput
          style={estils.input}
          placeholder="Nom"
          onChangeText={(text) => this.setState({ nom: text })}
          value={this.state.nom}
        />
        <TextInput
          style={estils.input}
          placeholder="Email"
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
        />
        <View style={estils.optionContainer}>
          <Text style={estils.optionText}>Selecciona una opción: </Text>
          {DONATION_OPTIONS.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                estils.optionButton,
                this.state.selectedOption === option &&
                  estils.optionButtonSelected,
              ]}
              onPress={() => this.handleOptionSelect(option)}
            >
              <Text
                style={[
                  estils.optionButtonText,
                  this.state.selectedOption === option &&
                    estils.optionButtonTextSelected,
                ]}
              >
                {option}€
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TextInput
          style={[estils.input, { marginTop: 10 }]}
          placeholder="Suma de €"
          onChangeText={(int) =>
            this.setState({ euro: int, selectedOption: "" })
          }
          value={this.state.euro}
        />
        <TextInput
          style={[estils.input, estils.textarea]}
          placeholder="Comentari"
          onChangeText={(text) => this.setState({ comentari: text })}
          value={this.state.comentari}
          multiline={true}
        />
        <Button
          style={estils.button}
          title="Enviar"
          onPress={() => this.props.navigation.navigate("Home")}
          color="#696969"
        >
          <Text style={estils.buttonText}>Enviar</Text>
        </Button>
      </View>
    );
  }
}

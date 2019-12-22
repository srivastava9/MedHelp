import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Header } from "react-navigation-stack";
import * as Permissions from "expo-permissions";

class Consultform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      symptoms: "",
      medication: "",
      nameError: "",
      symError: "",
      medError: ""
    };
  }
  openRecord = () => {
    this.props.navigation.navigate("Recorder");
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  onSubmit = () => {
    if (this.state.name === "") {
      this.setState({ nameError: "*Fill in Name" });
    }

    if (this.state.symptoms === "") {
      this.setState({ symError: "*Fill in Symptoms" });
    }
    if (this.state.medication === "") {
      this.setState({ medError: "*Fill in Medication" });
    } else {
      this.setState({ nameError: "", symError: "", medError: "" });
      const data = {
        name: this.state.name,
        symptoms: this.state.symptoms,
        medication: this.state.medication
      };
      this.props.navigation.navigate("Reviewconsult", data);
    }
  };
  handleChangename = text => {
    this.setState({ name: text });
  };
  handleChange2 = text => {
    this.setState({ symptoms: text });
  };
  handleChange3 = text => {
    this.setState({ medication: text });
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        enabled
        keyboardVerticalOffset={Header.HEIGHT + 50}
      >
        <ScrollView>
          <Text style={styles.text}>Consultation Form</Text>
          <TextInput
            placeholder="Name Of Patient"
            placeholderTextColor={"grey"}
            value={this.state.name}
            na
            onChange={event => {
              this.handleChangename(event.nativeEvent.text);
            }}
            style={[styles.input, { height: 40 }]}
          />
          <Text style={styles.errortext}>{this.state.nameError}</Text>
          <Text style={styles.label}>Symptoms</Text>
          <TextInput
            value={this.state.symptoms}
            multiline={true}
            style={[styles.input, { marginTop: 0, height: 80, borderWidth: 1 }]}
            onChange={event => {
              this.handleChange2(event.nativeEvent.text);
            }}
          />
          <Text style={styles.errortext}>{this.state.symError}</Text>
          <Text style={styles.label}>Medication</Text>
          <TextInput
            value={this.state.medication}
            multiline={true}
            style={[styles.input, { height: 90, borderWidth: 1 }]}
            onChange={event => {
              this.handleChange3(event.nativeEvent.text);
            }}
          />
          <Text style={styles.errortext}>{this.state.medError}</Text>
          <TouchableOpacity style={styles.button1} onPress={this.goBack}>
            <Button title="Back" onPress={this.goBack} color="#9FC131" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={this.onSubmit}>
            <Button title="Submit" onPress={this.onSubmit} color="#87CEFA" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 17, width: 300 }}
            onPress={this.goBack}
          >
            <Button
              title="Record Audio"
              onPress={this.openRecord}
              color="red"
            />
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default Consultform;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    alignItems: "center"
    //   justifyContent: "center"
  },
  label: {
    marginLeft: 10
  },
  errortext: {
    color: "red",
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 10
  },
  text: {
    fontSize: 22,
    fontFamily: "Roboto",
    marginTop: 30,
    marginBottom: 40
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    color: "black",
    backgroundColor: "#d1d1d1",
    width: 270,
    marginLeft: 10
  },
  button1: {
    width: 100,
    height: 50,
    marginLeft: 20,
    marginTop: 0
  },
  button2: {
    width: 100,
    height: 50,
    marginLeft: 180,
    marginTop: -50
  }
});

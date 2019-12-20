import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";
class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      phoneError: " "
    };
  }
  goBack = () => {
    this.props.navigation.goBack();
  };
  onChange = text => {
    this.setState({
      phone: text
    });
  };
  onSubmit = () => {
    if (this.state.phone.length > 10 || this.state.phone.length < 10) {
      this.setState({ phoneError: "*Invalid Mobile Number" });
    } else {
      this.setState({ phoneError: "" });

      this.props.navigation.navigate("Welcome");
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>SIGN UP</Text>
        <TextInput
          placeholder="Enter your Mobile Number"
          placeholderTextColor="#9FC131"
          style={styles.input}
          multiline={true}
          keyboardType="number-pad"
          value={this.state.phone}
          onChange={event => this.onChange(event.nativeEvent.text)}
        />
        <Text style={styles.errortext}>{this.state.phoneError}</Text>
        <TouchableOpacity style={styles.button1}>
          <Button title="Back" onPress={this.goBack} color="#9FC131" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Button title="Submit" onPress={this.onSubmit} color="#87CEFA" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default signUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    alignItems: "center"
    // justifyContent: "center"
  },
  errortext: {
    color: "red",
    marginTop: 10,
    marginLeft: -100
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#d1d1d1",
    color: "black",
    height: 40,
    width: 300,
    paddingLeft: 15
  },
  text: {
    fontSize: 32,

    fontFamily: "Roboto",
    marginTop: 150,
    marginBottom: 80,
    fontWeight: "200"
  },
  button1: {
    width: 100,
    height: 50,
    marginLeft: -130,
    marginTop: 80
  },
  button2: {
    width: 100,
    height: 50,
    marginLeft: 110,
    marginTop: -50
  }
});

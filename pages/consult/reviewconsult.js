import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Header } from "react-navigation-stack";
export class Asknum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      phoneError: ""
    };
  }

  addPhone = text => {
    this.setState({ phone: text });
  };
  changePopup = () => {
    this.props.closePop();
  };
  onSend = () => {
    if (this.state.phone.length > 10 || this.state.phone.length < 10) {
      this.setState({
        phoneError: "*Invalid Phone Number"
      });
    } else {
      this.setState({ phoneError: " " });
      this.props.handleSubmit(this.state.phone);
    }
  };

  render() {
    return (
      <View style={this.props.openPopup ? styles.popup : styles.nopopup}>
        <Text style={{}}>Add Patient Number</Text>
        <TouchableOpacity
          onPress={this.changePopup}
          activeOpacity={0.2}
          style={{
            width: 33,
            height: 33,

            marginLeft: 270,
            marginTop: -20
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={{
              uri:
                "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/39-512.png"
            }}
          />
        </TouchableOpacity>
        <TextInput
          value={this.state.phone}
          multiline={true}
          placeholder="Add Number"
          placeholderTextColor={"grey"}
          keyboardType="number-pad"
          style={{
            marginTop: 15,
            height: 30,
            width: 200,
            borderBottomWidth: 1.5
          }}
          onChange={event => {
            this.addPhone(event.nativeEvent.text);
          }}
        />
        <Text
          style={{
            color: "red",
            marginBottom: 10
          }}
        >
          {this.state.phoneError}
        </Text>
        <TouchableOpacity style={{ width: 100, height: 20, marginTop: 20 }}>
          <Button title="Send" color="#9FC131" onPress={this.onSend} />
        </TouchableOpacity>
      </View>
    );
  }
}
class Reviewconsult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "a",
      symptoms: "",
      medication: "",
      suggest: "",
      popupOpen: false
    };
  }
  componentDidMount() {
    this.setState({
      name: this.props.navigation.getParam("name", " "),
      symptoms: this.props.navigation.getParam("symptoms", " "),
      medication: this.props.navigation.getParam("medication", " ")
    });
  }
  goBack = () => {
    this.props.navigation.goBack();
  };
  onSubmit = () => {
    this.setState({
      popupOpen: true
    });
  };
  closePop = () => {
    this.setState({
      popupOpen: false
    });
  };
  onSuggest = text => {
    this.setState({
      suggest: text
    });
  };
  handleSubmit = () => {
    this.props.navigation.navigate("Success");
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        enabled
        keyboardVerticalOffset={Header.HEIGHT + 50}
      >
        <Asknum
          openPopup={this.state.popupOpen}
          closePop={this.closePop}
          handleSubmit={this.handleSubmit}
        />
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Lets Review the Consultant bill</Text>

            <Text style={styles.label}>Name Of Patient :</Text>
            <TextInput
              value={this.state.name}
              editable={false}
              style={styles.input}
            ></TextInput>
            <Text style={styles.label}>Symptoms:</Text>
            <TextInput
              value={this.state.symptoms}
              multiline={true}
              style={[
                styles.input,
                { marginTop: -20, height: 80, borderWidth: 1 }
              ]}
              editable={false}
            />
            <Text style={styles.label}>Medication:</Text>
            <TextInput
              value={this.state.medication}
              multiline={true}
              style={[styles.input, { height: 90, borderWidth: 1 }]}
              editable={false}
            />
            <Text style={styles.label}>Add Suggestions:</Text>
            <TextInput
              value={this.state.suggest}
              multiline={true}
              style={[styles.input, { height: 120, borderWidth: 1 }]}
              onChange={event => {
                this.onSuggest(event.nativeEvent.text);
              }}
            />
            <TouchableOpacity style={styles.button1} onPress={this.goBack}>
              <Button title="Back" onPress={this.goBack} color="#9FC131" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={this.onSubmit}>
              <Button title="Submit" onPress={this.onSubmit} color="#87CEFA" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default Reviewconsult;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    alignItems: "center",
    height: 1000
    // justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#d1d1d1",
    marginLeft: 140,
    color: "black",
    height: 40,
    width: 170,
    marginBottom: 50,
    paddingLeft: 15,
    marginTop: -29
  },
  nopopup: {
    display: "none"
  },
  title: {
    fontSize: 22,
    fontFamily: "Roboto",
    marginTop: 40,
    marginBottom: 40
  },
  label: {
    marginLeft: -200
  },
  button1: {
    width: 100,
    height: 50,
    marginLeft: -120,
    marginTop: -20
  },
  button2: {
    width: 100,
    height: 50,
    marginLeft: 180,
    marginTop: -50
  },
  popup: {
    alignItems: "center",
    position: "absolute",
    paddingTop: 15,
    top: 180,
    zIndex: 10,
    left: 30,
    height: 200,
    width: 330,
    borderRadius: 20,
    shadowRadius: 60,
    shadowColor: "#d1d1d1",
    backgroundColor: "#fff"
  }
});

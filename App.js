import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import signUp from "./pages/signup";
import Profile from "./pages/welcome";
import Consultform from "./pages/consult/consultform";
import Reviewconsult from "./pages/consult/reviewconsult";
import PatientList, {
  PatientData,
  OpenConsult
} from "./pages/Patient Data/datalist";
import Recorder from "./pages/consult/recorder";

// import navigator from "./navigator.js";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goSignup = () => {
    this.props.navigation.navigate("Sign");
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 400, height: 200 }}
          source={{
            uri:
              "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
          }}
        />
        <Text style={styles.text}>Welcome To App </Text>
        <TouchableOpacity style={styles.button}>
          <Button
            title="Let's Start"
            onPress={this.goSignup}
            color="#9FC131"
          ></Button>
        </TouchableOpacity>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Sign: signUp,
    Welcome: Profile,
    Consultform: Consultform,
    Reviewconsult: Reviewconsult,
    Success: SuccessMessage,
    PatientList: PatientList,
    PatientData: PatientData,
    OpenConsult: OpenConsult,
    Recorder: Recorder
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 22,
    fontFamily: "Roboto",
    marginTop: 50,
    marginBottom: 40
  },
  button: {
    width: 200,
    height: 50
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
export function SuccessMessage(props) {
  return (
    <View style={styles.popup}>
      <Text>Your Consultation Has been Sent To Patient !</Text>
      <Button
        color="#9FC131"
        onPress={() => {
          props.navigation.navigate("Welcome");
        }}
        title="Close"
      />
    </View>
  );
}

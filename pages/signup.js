import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { Header } from "react-navigation-stack";
class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      phoneError: " ",
      signUp: true,
      otp: "",
      otpError: " "
    };
  }
  changeSignup = () => {
    this.setState({ signUp: !this.state.signUp });
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  onChange = text => {
    this.setState({
      phone: text
    });
  };
  onChangeOtp = text => {
    this.setState({ otp: text });
  };
  onSignup = () => {
    if (this.state.phone.length > 10 || this.state.phone.length < 10) {
      this.setState({ phoneError: "*Invalid Mobile Number" });
    } else {
      this.setState({ phoneError: "", otpError: "" });

      this.props.navigation.navigate("Welcome");
    }
  };
  onLogin = () => {
    if (this.state.phone.length > 10 || this.state.phone.length < 10) {
      this.setState({ phoneError: "*Invalid Mobile Number" });
    } else if (this.state.otp.length < 6) {
      this.setState({ otpError: "*Enter OTP" });
    } else {
      this.setState({ phoneError: "", otpError: "" });

      this.props.navigation.navigate("Welcome");
    }
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
          {this.state.signUp ? (
            <KeyboardAvoidingView
              style={styles.container}
              behavior="padding"
              enabled
              keyboardVerticalOffset={Header.HEIGHT + 50}
            >
              <ScrollView>
                <View style={styles.signupContainer}>
                  <View style={styles.toggleContainer}>
                    <TouchableOpacity onPress={this.changeSignup}>
                      <View style={styles.signupButton}>
                        <Text>Sign Up</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.changeSignup}>
                      <View style={styles.loginButton}>
                        <Text>Login</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

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
                  <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.button2}>
                      <Button
                        title="Sign Up"
                        onPress={this.onSignup}
                        color="#12BA03"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          ) : (
            <KeyboardAvoidingView
              style={styles.container}
              behavior="padding"
              enabled
              keyboardVerticalOffset={Header.HEIGHT + 50}
            >
              <ScrollView>
                <View style={styles.signupContainer}>
                  <View style={styles.toggleContainer}>
                    <TouchableOpacity onPress={this.changeSignup}>
                      <View style={styles.signupButton1}>
                        <Text>Sign Up</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.changeSignup}>
                      <View style={styles.loginButton1}>
                        <Text>Login</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <TextInput
                    placeholder="Registered Mobile Number"
                    placeholderTextColor="#9FC131"
                    style={styles.input}
                    multiline={true}
                    keyboardType="number-pad"
                    value={this.state.phone}
                    onChange={event => this.onChange(event.nativeEvent.text)}
                  />
                  <Text style={styles.errortext}>{this.state.phoneError}</Text>
                  <TextInput
                    placeholder="One Time Password"
                    placeholderTextColor="#9FC131"
                    style={styles.input}
                    multiline={true}
                    keyboardType="number-pad"
                    value={this.state.otp}
                    onChange={event => this.onChangeOtp(event.nativeEvent.text)}
                  />
                  <Text style={styles.errortext}>{this.state.otpError}</Text>
                  <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.button2}>
                      <Button
                        title="Login"
                        onPress={this.onLogin}
                        color="#12BA03"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
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
  signupContainer: {
    marginTop: 90,
    alignItems: "center"
  },
  errortext: {
    color: "red",
    marginTop: 10,
    marginLeft: -100
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    marginTop: 20,
    color: "black",
    height: 40,
    width: 300,
    paddingLeft: 15
  },
  toggleContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,

    width: 190,
    height: 40,
    marginBottom: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#84B2FE"
  },
  signupButton: {
    flex: 1,
    width: 95,
    marginLeft: -37,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#84B2FE",
    borderRadius: 20,
    fontWeight: 500
  },
  loginButton: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton1: {
    flex: 1,
    width: 95,
    marginLeft: 14,
    marginRight: -30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#84B2FE",
    borderRadius: 20,
    fontWeight: 500
  },
  signupButton1: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 32,

    fontFamily: "Roboto",
    marginTop: 150,
    marginBottom: 80,
    fontWeight: "200"
  },

  button2: {
    width: 120,
    height: 50,
    color: "black",
    fontWeight: 200,
    marginTop: 20
  }
});

import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  openConsult = () => {
    this.props.navigation.navigate("Consultform");
  };
  openData = () => {
    this.props.navigation.navigate("PatientList");
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://image.flaticon.com/icons/png/512/122/122454.png"
          }}
          style={styles.image}
        />
        <Text style={styles.text}>Welcome Doctor!</Text>
        <Card
          text="Add Consultation"
          styling={{ marginTop: 50 }}
          onClick={this.openConsult}
        />
        <Card
          text="View Patient's Data"
          styling={{ marginTop: 80 }}
          onClick={this.openData}
        />
      </View>
    );
  }
}

export default Profile;
function Card(props) {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={[styles.card, props.styling]} clickable="true">
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
          }}
          style={{ height: 100, width: 265.5 }}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 18 }}> {props.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    alignItems: "center"
    // justifyContent: "center"
  },
  card: {
    width: 270,
    height: 170,
    borderColor: "#9FC131",
    alignContent: "center",
    borderWidth: 2,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 2
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: -250
  },
  text: {
    fontSize: 22,
    fontFamily: "Roboto",
    marginTop: -40,
    marginLeft: 20,
    marginBottom: 40
  },
  button: {
    width: 200,
    height: 50
  }
});

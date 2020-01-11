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
        <Text style={styles.text}>Welcome {this.props.name}</Text>
        <Card
          text="Add Consultation"
          styling={{ marginTop: 50 }}
          onClick={this.openConsult}
          img={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0y9K3Zl16_ahkuF-i6MUxbWNPQg47ezJT8jykT7wf3CWMr9NVA&s"
          }}
        />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Card
            text="View Patient's Data"
            styling={{ marginTop: 20, width: 130 }}
            onClick={this.openData}
            img={{
              uri: "https://image.flaticon.com/icons/svg/2303/2303858.svg"
            }}
          />
          <Card
            text="My Appointment"
            styling={{ marginTop: 20, width: 130, marginLeft: 10 }}
            onClick={this.openData}
            img={{
              uri: "https://image.flaticon.com/icons/svg/847/847032.svg"
            }}
          />
        </View>
      </View>
    );
  }
}

export default Profile;
function Card(props) {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={[styles.card, props.styling]} clickable="true">
        <View style={{ alignItems: "center" }}>
          <Image source={props.img} style={{ height: 100, width: 100 }} />
        </View>
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

    alignItems: "center"
    // justifyContent: "center"
  },
  card: {
    width: 270,
    height: 170,
    borderColor: "#9FC131",
    alignContent: "center",
    borderWidth: 2,
    marginTop: -40,
    borderRadius: 20,
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

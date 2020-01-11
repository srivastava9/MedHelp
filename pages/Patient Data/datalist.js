import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image
} from "react-native";
class PatientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["Aditya", "Mukesh", "Rajesh", "Rani", "Karishma"]
    };
  }
  profilelist = () => {
    return this.state.name.map(data => {
      <PatientProfile name={data} />;
    });
  };
  render() {
    const { name } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={[styles.title, { marginTop: -300 }]}>Your Patients</Text>
          <View
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <PatientProfile
              profilename="Aditya"
              openData={() => {
                this.props.navigation.navigate("PatientData");
              }}
            />
            <PatientProfile
              profilename="Aditya"
              openData={() => {
                this.props.navigation.navigate("PatientData");
              }}
            />
            <PatientProfile
              profilename="Aditya"
              openData={() => {
                this.props.navigation.navigate("PatientData");
              }}
            />
            <PatientProfile
              profilename="Aditya"
              openData={() => {
                this.props.navigation.navigate("PatientData");
              }}
            />
            <PatientProfile
              profilename="Aditya"
              openData={() => {
                this.props.navigation.navigate("PatientData");
              }}
            />
            <PatientProfile
              profilename="Aditya"
              openData={() => {
                this.props.navigation.navigate("PatientData");
              }}
            />
            <PatientProfile
              profilename="Aditya"
              openData={() => {
                this.props.navigation.navigate("PatientData");
              }}
            />
            <PatientProfile
              profilename="Aditya"
              openData={() => {
                this.props.navigation.navigate("PatientData");
              }}
            />
            <PatientProfile
              profilename="Aditya"
              openData={() => {
                this.props.navigation.navigate("PatientData");
              }}
            />
            <PatientProfile
              profilename="Aditya"
              openData={() => {
                this.props.navigation.navigate("PatientData");
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default PatientList;
export function PatientProfile(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.openData();
      }}
    >
      <View
        style={{
          width: 160,
          height: 200,
          marginBottom: 20,
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 20
        }}
      >
        <Image
          source={{
            uri: "https://image.flaticon.com/icons/png/512/122/122454.png"
          }}
          style={{ width: 155, height: 150 }}
        />
        <Text
          style={{
            fontSize: 20,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {props.profilename}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export class PatientData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
        <View style={[styles.container, { justifyContent: "flex-start" }]}>
          <Text style={[styles.title, { marginTop: 10 }]}>Patient's Data</Text>
          <PatientDataEach
            date="12/11/2018"
            symptoms="fever"
            openConsult={() => {
              this.props.navigation.navigate("OpenConsult");
            }}
          />
          <PatientDataEach
            date="12/11/2017"
            symptoms="Cancer"
            openConsult={() => {
              this.props.navigation.navigate("OpenConsult");
            }}
          />
          <PatientDataEach
            date="12/11/2016"
            symptoms="Aids"
            openConsult={() => {
              this.props.navigation.navigate("OpenConsult");
            }}
          />
          <PatientDataEach
            date="12/11/2015"
            symptoms="Cough"
            openConsult={() => {
              this.props.navigation.navigate("OpenConsult");
            }}
          />
          <PatientDataEach
            date="12/11/2014"
            symptoms="Jaundice"
            openConsult={() => {
              this.props.navigation.navigate("OpenConsult");
            }}
          />
          <PatientDataEach
            date="12/11/2013"
            symptoms="Tetanus"
            openConsult={() => {
              this.props.navigation.navigate("OpenConsult");
            }}
          />
          <PatientDataEach
            date="12/11/2012"
            symptoms="Death"
            openConsult={() => {
              this.props.navigation.navigate("OpenConsult");
            }}
          />
        </View>
      </ScrollView>
    );
  }
}
export function PatientDataEach(props) {
  return (
    <TouchableOpacity onPress={props.openConsult}>
      <View style={styles.placard}>
        <Text style={{ fontSize: 22 }}>Name: Aditya</Text>
        <Text style={{ marginLeft: 200, marginTop: -24 }}> {props.date}</Text>
        <Text style={{ marginTop: 40, fontSize: 17 }}>
          Symptoms : {props.symptoms}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export class OpenConsult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Aditya Srivastava",
      symptoms: "fever\ncancer\njaundice\ntetanus",
      medication: "paracetamol\ncrocin\npain killer \n death"
    };
  }
  goBack = () => {
    this.props.navigation.goBack();
  };
  onSubmit = () => {
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <ScrollView>
        <View style={[styles.container, { justifyContent: "flex-start" }]}>
          <Text style={styles.title}> Consultant Data</Text>
          <Text style={{ marginTop: -20, marginBottom: 20, marginLeft: 190 }}>
            12/11/2019
          </Text>
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
              { marginTop: -20, height: 100, borderWidth: 1 }
            ]}
            editable={false}
          />
          <Text style={styles.label}>Medication:</Text>
          <TextInput
            value={this.state.medication}
            multiline={true}
            style={[styles.input, { height: 100, borderWidth: 1 }]}
            editable={false}
          />

          <TouchableOpacity style={styles.button1} onPress={this.goBack}>
            <Button title="Back" onPress={this.goBack} color="#9FC131" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={this.onSubmit}>
            <Button title="Submit" onPress={this.onSubmit} color="#87CEFA" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    alignItems: "center",
    height: 1500,
    justifyContent: "center"
  },
  placard: {
    width: 300,
    height: 150,
    borderColor: "#9FC131",
    alignContent: "center",
    borderWidth: 2,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 2,
    marginBottom: 20
  },
  title: {
    fontSize: 22,

    marginBottom: 40
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
  }
});

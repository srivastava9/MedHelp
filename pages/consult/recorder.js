import React, { Component } from "react";
import {
  Dimensions,
  Image,
  Slider,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
  View
} from "react-native";
import { Asset } from "expo-asset";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
// import * as Font from 'expo-font';
import * as Permissions from "expo-permissions";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveRecordingPermissions: false,
      isRecording: false,
      recordedTime: 0,
      doneRecording: false,
      error: false,
      errortext: "",
      recordingInstance: {},
      saveLocation: "",
      savedLocation: "",
      saved: false
    };
    this.recordingSettings = JSON.parse(
      JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY)
    );
    this.recording = new Audio.Recording();
  }
  componentDidMount() {
    this.askPermission();
  }
  askPermission = async () => {
    const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    this.setState({
      haveRecordingPermissions: response.status === "granted"
    });
  };

  handleRecording = async () => {
    if (!this.state.isRecording) {
      try {
        console.warn("hey");
        await this.recording.prepareToRecordAsync(this.recordingSettings);
        await this.recording.startAsync();
        this.setState({
          isRecording: true
        });
      } catch (error) {
        console.warn(error);
        this.setState({ errortext: error });
      }
    } else {
      try {
        await this.recording.stopAndUnloadAsync();
      } catch (error) {
        console.warn(error);
      }
      this.setState({
        doneRecording: true,
        isRecording: false
      });
    }
  };
  handleChange = text => {
    this.setState({
      saveLocation: text
    });
  };
  SaveFile = async () => {
    const location = await FileSystem.getInfoAsync(this.recording.getURI());
    this.setState({
      savedLocation: location.uri,
      saved: true
    });
  };
  render() {
    if (!this.state.haveRecordingPermissions) {
      return (
        <View style={styles.container}>
          <View />
          <Text style={[styles.errortext]}>
            You must enable audio recording permissions in order to use this
            app.
          </Text>
          <View />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.handleRecording}>
            <Image
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4L9clxk7GiIx4ntt6ydYHn_DnC-y6P91mTtjBdsHTyG0twNpq2g&s"
              }}
              style={{ width: 200, height: 200 }}
            />
          </TouchableOpacity>
          <View style={styles.recordingview}>
            {this.state.error ? (
              <Text>Error in Recoding is {this.state.errortext}</Text>
            ) : null}
          </View>
          <View>
            <View style={styles.recordingview}>
              {this.state.isRecording ? (
                <Text style={{ color: "red", marginTop: 30 }}>
                  Recording .....
                </Text>
              ) : (
                <Text style={{ marginTop: 30 }}>Start Recoridng</Text>
              )}
            </View>
          </View>
          {this.state.doneRecording ? (
            <View>
              {/* <TextInput
                value={this.state.saveLocation}
                onChange={event => {
                  this.handleChange(event.nativeEvent.text);
                }}
                placeholder="Enter Name Of Your File"
              /> */}
              <Button
                title="Save To Files"
                color="#9FC131"
                onPress={this.SaveFile}
                style={{ marginTop: 40, width: 200 }}
              ></Button>
            </View>
          ) : null}
          {this.state.saved ? (
            <Text>
              Your File Is Saved At {this.state.savedLocation} Thank You!
            </Text>
          ) : null}
        </View>
      );
    }
  }
}

export default Recorder;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    alignItems: "center",
    justifyContent: "center"
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

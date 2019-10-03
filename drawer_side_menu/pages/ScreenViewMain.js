import React, { Component } from 'react';
import {WebView} from 'react-native-webview';
import { StyleSheet, View, Text } from 'react-native';
 
export default class ScreenViewMain extends Component {
  render() {
    return (
      <WebView source={{uri: 'http://carbonospark.com/'}} />
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import 'react-native-gesture-handler';
//import React, {Component} from 'react';
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import Router from './src/navigation/Router';
//import { withAuthenticator } from 'aws-amplify-react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
//export default withAuthenticator(App);

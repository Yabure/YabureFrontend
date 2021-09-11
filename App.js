/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ScreenPage from './src/navigation/StackScreen';

const App = () => {
  return (
    <>
      <ScreenPage />
    </>
  );
};

export default App;

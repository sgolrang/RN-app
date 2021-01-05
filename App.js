import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
// import { enableScreens} from 'react-native-screens';
import MealsNavigator from './navigation/MealsNavigator';

// enableScreens();

const App = () => {

  return (
    <MealsNavigator />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 100,
    width: 400,
    backgroundColor: 'yellow',
  }
});

export default App;

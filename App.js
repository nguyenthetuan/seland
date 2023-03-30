import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => (
  <NavigationContainer>
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;

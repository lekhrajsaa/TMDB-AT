import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import HorizontalCardItem from './src/components/HorizontalCardItem';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          height: '100%',
          backgroundColor: '#F5F5F5',
          width: '35%',
          position: 'absolute',
        }}
      />
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
  },
  container: {
    marginTop: 10
  }
});

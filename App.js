import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import DescriptionScreen from './src/screens/DescriptionScreen';
import SearchScreen from './src/screens/SearchScreen';


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
      
      <View style={styles.container}>
        <HomeScreen />
        {/* <DescriptionScreen /> */}
        {/* <SearchScreen /> */}
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

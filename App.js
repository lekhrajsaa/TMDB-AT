import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import DescriptionScreen from './src/screens/DescriptionScreen';
import SearchScreen from './src/screens/SearchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuIcon from './src/components/MenuIcon';

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <View
        style={{
          height: '100%',
          backgroundColor: '#F5F5F5',
          width: '35%',
          position: 'absolute',
        }}
      />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Description"
          component={DescriptionScreen}
          options={{
            headerTransparent: true,
            headerTintColor: 'white',
            title: '',
            headerRight: () =>(<MenuIcon/>)
          }}
        />
        <Stack.Screen 
        name="Search" 
        component={SearchScreen}
        options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
  },
  container: {
    marginTop: 10,
  },
});

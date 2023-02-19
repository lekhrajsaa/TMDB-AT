import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function MenuIcon() {
  return (
    <View style={styles.icon}>
      <TouchableOpacity>
        <Image source={require('../assets/icons/Menu.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingRight: 20,
  },
});

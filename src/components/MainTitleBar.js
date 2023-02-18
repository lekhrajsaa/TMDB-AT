import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function MainTitleBar() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <TouchableOpacity>
          <Image source={require('../assets/icons/Union.png')} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text}>FilmKu</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={require('../assets/icons/Notif.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  text: {
    fontFamily: 'Merriweather-Black',
    // fontWeight: 900,
    color: '#110E47',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.02,
  },
});

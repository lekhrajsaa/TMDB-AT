import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HeadingTitle({title}) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Merriweather-Black',
    // fontWeight: 900,
    color: '#110E47',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.02,
  },
});

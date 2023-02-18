import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function MovieName({title}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.movieNameText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: 143,
  },
  movieNameText: {
    fontFamily: 'Mulish-Regular',
    color: '#000000',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.02,
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Genre({genere_name}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{genere_name.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginRight: 8,
    borderWidth: 1,
    alignSelf: 'flex-start',
    borderColor: '#AAA9B1',
    alignItems: 'center',
    backgroundColor: '#DBE3FF',
    borderRadius: 50,
  },
  text: {
    fontWeight: 700,
    color: '#88A4E8',
    fontSize: 8,
    lineHeight: 10,
    letterSpacing: 0.02,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
});

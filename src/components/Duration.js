import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Duration() {
  return (
    <View style={styles.mainContainer}>
      <Image source={require('../assets/icons/Clock.png')} />
      <Text style={styles.duration}> 1h 47m </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center'
  },
  duration: {
    color: '#000000',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.02,
  }
})
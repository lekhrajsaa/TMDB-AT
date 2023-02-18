import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ShowmoreButton({onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>See more</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: '#AAA9B1',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 8,
      },
      buttonText: {
        color: '#AAA9B1',
        fontWeight: 'bold',
        fontWeight: 400,
        fontSize: 10,
        lineHeight: 13,
        textAlign: 'right',
        letterSpacing: 0.02
      },
})
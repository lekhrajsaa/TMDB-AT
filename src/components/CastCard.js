import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CastCard({imagePath, name}) {
  return (
    <View style={styles.mainContainer}>
      <Image source={imagePath} style={styles.img} />
      <View style={styles.nameContainer}>
      <Text style={styles.name} >{name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        width: 72,
        height: 76,
        borderRadius: 5,
    },
    nameContainer: {
        width: 72,
        Height: "100%"
    },
    name: {
        fontFamily: "Mulish-Regular",
        fontWeight: 400,
        fontSize: 12,
        color: '#110E47',
        lineHeight: 15,
        letterSpacing: 0.02
    }
})
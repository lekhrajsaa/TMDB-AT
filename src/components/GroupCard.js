import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GroupCard({title, value}) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Mulish-Regular',
        fontWeight: 400,
        fontSize: 12,
        color: '#9C9C9C'
    },
    value: {
        fontFamily: 'Mulish-Regular',
        fontWeight: 600,
        marginTop: 4,
        color: '#000000',
        fontSize: 12,

    }
})
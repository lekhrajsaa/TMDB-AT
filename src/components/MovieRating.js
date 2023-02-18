import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function MovieRating({rating}) {

  return (
    <View style={styles.movieRating}>
        <Image source={require('../assets/icons/Star.png')} style={styles.star}/>
        <Text style={styles.movieRatingText}>{rating}/10 IMDb</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    movieRating: {
        flexDirection: 'row',
        marginTop: 8
    },
    star: {
        width: 12,
        height: 12
    },
    movieRatingText: {
        color: '#9C9C9C',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: 0.02,
        marginHorizontal: 4,
    },
})
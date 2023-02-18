import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MovieRating from './MovieRating';
import MovieName from './MovieName';

export default function HorizontalCardItem({title, imgurl, rating}) {
  const url = 'https://image.tmdb.org/t/p/w500/';

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <TouchableOpacity>
          <Image source={{uri: `${url}${imgurl}`}} style={styles.img} />
        </TouchableOpacity>
      </View>
      <View style={styles.movieName}>
        <TouchableOpacity>
          <MovieName title={title} />
        </TouchableOpacity>
      </View>
      <MovieRating rating={rating} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginRight: 16,
  },
  imgContainer: {
    backgroundColor: 'black',
    elevation: 5,
    borderRadius: 5,
  },
  img: {
    width: 143,
    height: 212,
    borderRadius: 5,
  },
  movieName: {
    marginTop: 12,
  },
});

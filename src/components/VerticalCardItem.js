import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MovieName from './MovieName';
import MovieRating from './MovieRating';
import Duration from './Duration';
import Genre from './Genre';
import { useNavigation } from '@react-navigation/native';

export default function VerticalCardItem({title, imgurl, rating, genre}) {

  let generateKey = () => Math.floor(Math.random() * 1001)

  const genre_identities = [
    {id: 28, name: 'Action'},
    {id: 12, name: 'Adventure'},
    {id: 16, name: 'Animation'},
    {id: 35, name: 'Comedy'},
    {id: 80, name: 'Crime'},
    {id: 99, name: 'Documentary'},
    {id: 18, name: 'Drama'},
    {id: 10751, name: 'Family'},
    {id: 14, name: 'Fantasy'},
    {id: 36, name: 'History'},
    {id: 27, name: 'Horror'},
    {id: 10402, name: 'Music'},
    {id: 9648, name: 'Mystery'},
    {id: 10749, name: 'Romance'},
    {id: 878, name: 'Science Fiction'},
    {id: 10770, name: 'TV Movie'},
    {id: 53, name: 'Thriller'},
    {id: 10752, name: 'War'},
    {id: 37, name: 'Western'},
  ];

  const url = 'https://image.tmdb.org/t/p/w500/';

  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Description")
  }

  return (
    <View style={styles.mainContainer}>
      <View>
        <TouchableOpacity onPress={handlePress}>
          <Image source={{uri: `${url}${imgurl}`}} style={styles.img} />
        </TouchableOpacity>
      </View>
      <View style={styles.movieDescription}>
        <TouchableOpacity onPress={handlePress}>
          <MovieName title={title} />
        </TouchableOpacity>
        <MovieRating rating={rating} />

        <FlatList 
          style={styles.genreContainer}
          numColumns={2}
          data={genre}
          key = {generateKey()}
          renderItem={({item}) => (
            <Genre
              genere_name={
                genre_identities.find(element => element.id == item).name
              }
            />
          )}
        />

        <Duration />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginBottom: 13,
  },
  img: {
    width: 85,
    height: 128,
    borderRadius: 5,
  },
  movieNameText: {
    color: '#000000',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.02,
  },
  movieDescription: {
    marginLeft: 16,
  },
  genreContainer: {
    flexDirection: 'row',
  }
});

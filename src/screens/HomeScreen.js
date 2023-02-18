import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HorizontalCardItem from '../components/HorizontalCardItem';
import VerticalCardItem from '../components/VerticalCardItem';
import Heading from '../components/Heading';
import MainTitleBar from '../components/MainTitleBar';
import BottomNavigation from '../components/BottomNavigation';
import {ActivityIndicator} from 'react-native';

export default function HomeScreen() {
  const [data, setData] = useState(null);

  const getMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=0f3cba8dc6016a706814c25d7a85395f&language=en-US&page=1',
      );
      const json = await response.json();
      setData(json);
      // console.log(data.results[0].title);
      // console.log(data.results[0].vote_average);
      // console.log(data.results[0].backdrop_path);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <MainTitleBar />
      <View style={styles.firstHeading}>
        <Heading title={'Now Showing'} />
      </View>
      {data ? (
        <FlatList
          style={styles.horizontalFlatlist}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data.results}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <HorizontalCardItem
              title={item.title}
              imgurl={item.backdrop_path}
              rating={item.vote_average}
            />
          )}
        />
      ) : (
        <ActivityIndicator />
      )}

      <View style={styles.secondHeading}>
        <Heading title={'Popular'} />
      </View>
      {data ? (
        <FlatList
          style={styles.verticalflatlistStyle}
          showsVerticalScrollIndicator={false}
          data={data.results}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <VerticalCardItem
              title={item.title}
              imgurl={item.backdrop_path}
              rating={item.vote_average}
              genre={item.genre_ids}
            />
          )}
        />
      ) : (
        <ActivityIndicator />
      )}

      <View style={styles.bottomContainer}>
        <BottomNavigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstHeading: {
    marginTop: 16,
    marginBottom: 17,
    paddingHorizontal: 20,
  },
  secondHeading: {
    marginTop: 24,
    marginBottom: 11,
    paddingHorizontal: 20,
  },
  horizontalFlatlist: {
    paddingLeft: 20,
  },
  verticalflatlistStyle: {
    paddingHorizontal: 20,
    height: 245,
  },
});

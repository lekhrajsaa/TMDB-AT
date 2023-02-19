import {
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  ActivityIndicator,
  Button,
  Keyboard,
} from 'react-native';
import {StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import MainTitleBar from '../components/MainTitleBar';
import VerticalCardItem from '../components/VerticalCardItem';
import Heading from '../components/Heading';
import SearchButton from '../components/SearchBtn';

export default function SearchScreen() {
  const [search, setSearch] = useState('Populer');
  const [data, setData] = useState(null);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=0f3cba8dc6016a706814c25d7a85395f&language=en-US&query=${search}&page=1&include_adult=false`;

  const getMovies = async () => {
    try {
      const response = await fetch(url);
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
    setSearch()
  }, []);


  const handlePress = () => {
    getMovies();
    setSearch();
    Keyboard.dismiss()
  }

  // console.log(search)
  // console.log(data.results);

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <MainTitleBar />
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Search The Movie Here'}
            onChangeText={newText => {
              setSearch(newText);
            }}
            value={search}
          />
        </View>
        <SearchButton onPress={handlePress}/>
      </View>

      <View style={styles.searchresult}>
        <Heading title={'Search Result'} />
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
              imgurl={
                item.poster_path
                  ? item.poster_path
                  : '/tdiCMcjfpYzSwaVBX0STody4P2d.jpg'
              }
              rating={item.vote_average}
              genre={item.genre_ids}
            />
          )}
        />
      ) : (
          <ActivityIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // paddingHorizontal: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 50,
  },
  input: {
    // backgroundColor: 'gray',
    height: 40,
    padding: 10,
  },
  searchresult: {
    marginTop: 25,
    paddingHorizontal: 20
  },
  verticalflatlistStyle: {
    marginTop: 24,
    height: 600,
    paddingHorizontal: 20
  },
});

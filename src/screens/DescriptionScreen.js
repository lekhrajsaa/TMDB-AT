import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {StatusBar} from 'react-native';
import SvgBookmark3 from '../components/SvgBookmark3';
import MovieRating from '../components/MovieRating';
import Genre from '../components/Genre';
import Heading from '../components/Heading';
import HeadingTitle from '../components/HeadingTitle';
import CastCard from '../components/CastCard';
import GroupCard from '../components/GroupCard';

export default function DescriptionScreen() {
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      {/* <Image
        source={require('../assets/images/image9.png')}
        style={styles.img} 
      /> */}

      <ImageBackground
        source={require('../assets/images/image9.png')}
        style={styles.img}>
        <TouchableOpacity>
          <Image source={require('../assets/icons/ButtonPlay.png')} />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Play Trailer</Text>
      </ImageBackground>
      <View style={styles.secondContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.movieTitle}> Spiderman: No Way Home</Text>
          <SvgBookmark3 />
        </View>
        <MovieRating rating={9.5} />
        <View style={styles.genreContainer}>
          <Genre genere_name={'Action'} />
          <Genre genere_name={'Adventure'} />
          <Genre genere_name={'Fantasy'} />
        </View>
        <View style={styles.groupCardContainer}>
          <GroupCard title={'Length'} value={'2h 28min'} />
          <GroupCard title={'Language'} value={'English'} />
          <GroupCard title={'Rating'} value={'PG-13'} />
        </View>
        <HeadingTitle title={'Description'} />
        <Text style={styles.descriptionContainer}>
          With Spider-Man's identity now revealed, Peter asks Doctor Strange for
          help. When a spell goes wrong, dangerous foes from other worlds start
          to appear, forcing Peter to discover what it truly means to be
          Spider-Man.
        </Text>
        <Heading title={'Cast'} />
        <View style={styles.castContainer}>
          <CastCard
            imagePath={require('../assets/images/image10.png')}
            name={'Tom Holland'}
          />
          <CastCard
            imagePath={require('../assets/images/image11.png')}
            name={'Zendaya'}
          />
          <CastCard
            imagePath={require('../assets/images/image12.png')}
            name={'Benedict Cumberbatch'}
          />
          <CastCard
            imagePath={require('../assets/images/image13.png')}
            name={'Jacon Batalon'}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: -10,
    flex: 1,
  },
  img: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Mulish-Regular',
    fontWeight: 700,
    color: '#ffffff',
    marginTop: 8,
  },
  secondContainer: {
    marginTop: -50,
    // backgroundColor: 'gray',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 24,
  },
  movieTitle: {
    fontFamily: 'Mulish-SemiBold',
    fontWeight: 700,
    fontSize: 20,
    color: '#000000',
    width: 200,
    height: '100%',
  },
  genreContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  groupCardContainer: {
    flexDirection: 'row',
    width: 250,
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 24,
  },
  descriptionContainer: {
    color: '#9C9C9C',
    marginTop: 8,
    letterSpacing: 0.02,
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    fontWeight: 400,
    lineHeight: 22,
    marginBottom: 24,
  },
  castContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 17,
  },
});

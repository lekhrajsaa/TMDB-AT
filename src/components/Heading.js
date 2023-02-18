import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ShowmoreButton from './ShowmoreButton';
import HeadingTitle from './HeadingTitle';

export default function Heading({title}) {
  return (
    <View style={styles.titleContiner}>
      <View>
        <HeadingTitle title={title}/>
        {/* <Text style={styles.title1}>Now Showing</Text> */}
      </View>
      <View>
        <ShowmoreButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  // title1: {
  //   fontFamily: 'Mulish-Regular',
  //   fontWeight: 900,
  //   color: '#110E47',
  //   fontSize: 16,
  //   lineHeight: 20,
  //   letterSpacing: 0.02,
  // },
});

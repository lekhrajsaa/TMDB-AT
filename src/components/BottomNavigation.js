import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgBookmark1 from './SvgBookmark1';
import SvgBookmark2 from './SvgBookmark2';
import SvgBookmark3 from './SvgBookmark3';

export default function BottomNavigation() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <TouchableOpacity>
          <SvgBookmark2 />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <SvgBookmark1 />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <SvgBookmark3 />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 51,
    backgroundColor: '#ffffff',
  },
});

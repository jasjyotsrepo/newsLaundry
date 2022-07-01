import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Divider({hzntl = true, vrtcl = false, hght = 16}) {
  if (vrtcl)
    return (
      <View style={{width: 0.3, backgroundColor: 'grey', height: hght}}></View>
    );
  return <View style={styles.horizontalDivider}></View>;
}

const styles = StyleSheet.create({
  horizontalDivider: {
    height: 0.2,
    backgroundColor: 'white',
    lineHeight: 1,
  },
});

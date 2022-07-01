import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SizedBox({width, height}) {
  return (
    <View
      style={{
        marginHorizontal: width ? width : 0,
        marginVertical: height ? height : 0,
      }}></View>
  );
}

const styles = StyleSheet.create({});

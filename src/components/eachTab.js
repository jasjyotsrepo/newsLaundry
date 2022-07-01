import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

export default function EachTab({tabName, handleTabBarPress, currentView}) {
  return (
    <TouchableWithoutFeedback onPress={() => handleTabBarPress(tabName)}>
      <View
        style={[
          styles.view,
          {backgroundColor: currentView === tabName ? '#787878' : '#C8C8C8'},
        ]}>
        <Text>{tabName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 16,
    width: '50%',
    alignItems: 'center',
  },
});

import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

export default function Button({handlePress, label}) {
  return (
    <TouchableWithoutFeedback onPress={() => handlePress()}>
      <View style={styles.button}>
        <Text>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 24,
    backgroundColor: '#FA8072',
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: 80,
    borderRadius: 20,
    justifyContent: 'center',
  },
});

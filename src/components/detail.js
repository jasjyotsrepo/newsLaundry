import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

export default function Detail({label, value, handleChange, disabled}) {
  return (
    <View style={styles.rowView}>
      <Text style={{color: 'white', margin: 12}}>{label} :</Text>
      <TextInput
        value={value}
        editable={!disabled}
        onChange={e => {
          handleChange(e);
        }}
        autoFocus={!disabled}
        style={styles.txtInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  txtInput: {
    backgroundColor: 'grey',
    padding: 12,
    borderRadius: 20,
  },
});

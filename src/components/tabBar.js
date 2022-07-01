import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EachTab from './eachTab';

export default function TabBar({tabList, handleTabBarPress, currentView}) {
  return (
    <View style={styles.rowView}>
      {tabList?.map(item => (
        <EachTab
          tabName={item}
          key={item}
          handleTabBarPress={handleTabBarPress}
          currentView={currentView}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    backgroundColor: '#C8C8C8',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 8,
  },
});

import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import TabBar from '../components/tabBar';
import HomeContent from '../components/homeContent';
import ProfileContent from '../components/profileContent';
const {width, height} = Dimensions.get('window');

export default function MainScreens({userDetails, navigation}) {
  const tabList = ['HOME', 'PROFILE'];
  const [currentView, setcurrentView] = useState('HOME');

  const handleTabBarPress = useCallback(
    value => {
      setcurrentView(value);
    },
    [currentView],
  );

  return (
    <View style={styles.view}>
      <TabBar
        tabList={tabList}
        handleTabBarPress={handleTabBarPress}
        currentView={currentView}
      />
      {currentView === 'HOME' && <HomeContent navigation={navigation} />}
      {currentView === 'PROFILE' && (
        <ProfileContent
          userDetails={JSON.parse(userDetails)}
          navigation={navigation}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'black',
    height: height,
  },
});

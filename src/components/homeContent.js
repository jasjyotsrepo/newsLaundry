import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import API_END_POINTS from '../endPoints';
import NewsCard from './newsCard';

const {width, height} = Dimensions.get('window');

export default function HomeContent({navigation}) {
  const [loading, setLoading] = useState(false);
  const [dataRecvd, setDataRcvd] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_END_POINTS.mainScreen)
      .then(data => {
        setDataRcvd(data?.data?.data?.collection?.items);
      })
      .catch(error => console.log('ERROR IN API', error))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({item}) =>
    item?.items?.map(insideItem => (
      <NewsCard cardDetail={insideItem} navigation={navigation} />
    ));

  if (loading || !dataRecvd)
    return (
      <View style={styles.center}>
        <ActivityIndicator size={'large'} color={'red'} />
      </View>
    );

  return (
    <View style={{marginHorizontal: 12, marginVertical: 12}}>
      <FlatList data={dataRecvd} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    position: 'absolute',
    top: height / 2.5,
    left: width / 2.5,
  },
});

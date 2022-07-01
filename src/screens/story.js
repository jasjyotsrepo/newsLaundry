import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import API_END_POINTS from '../endPoints';
import Divider from '../components/divider';
import SizedBox from '../components/sizedBox';
import RelatedLink from '../components/relatedLink';

const {width, height} = Dimensions.get('window');

export default function Story({route, navigation}) {
  const [loading, setLoading] = useState(false);
  const [dataRcvd, setDataRcvd] = useState([]);
  const uri =
    'https://gumlet.assettype.com/newslaundry%2F2022-06%2Ff4007329-2ab4-43ee-b1ef-c5518763d83b%2FAssam_flood_cheatsheet.jpg?auto=format%2Ccompress&w=1200';

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_END_POINTS.eachStory.concat(route?.params?.slug))
      .then(data => {
        setDataRcvd(data);
      })
      .catch(error => console.log('Error in fetching story data', error))
      .finally(() => setLoading(false));
  }, []);

  console.log('STORY', dataRcvd?.data?.story?.cards);

  const renderItem = ({item, index}) => (
    <View
      style={{
        marginRight: 8,
      }}>
      <RelatedLink details={item} navigation={navigation} />
    </View>
  );

  const paraGraph = i => {
    console.log(
      'PARAGRAPH',
      JSON.stringify(i?.text)?.replace(/(<([^>]+)>)/gi, ''),
    );

    return (
      <>
        <SizedBox height={4} />
        {React.createElement(
          Text,
          {style: {color: 'white'}},
          i?.text?.replace(/(<([^>]+)>)/gi, ''),
        )}
      </>
    );
  };

  if (loading || !dataRcvd)
    return (
      <View style={styles.mainView}>
        <View style={styles.center}>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      </View>
    );

  return (
    <ScrollView style={styles.mainView}>
      <Image
        style={styles.image}
        source={{
          uri: uri,
        }}
      />
      <SizedBox height={4} />
      <View style={styles.rowView}>
        {dataRcvd?.data?.story?.sections?.map(item => (
          <>
            <Text style={styles.sectionText}>{item?.name}</Text>
            <SizedBox width={4} />
          </>
        ))}
      </View>

      <SizedBox height={4} />
      <Text style={styles.headLine}>{dataRcvd?.data?.story?.headline}</Text>
      <SizedBox height={4} />
      <Text style={styles.subheadline}>
        {dataRcvd?.data?.story?.subheadline}
      </Text>
      <SizedBox height={4} />
      <View style={styles.rowView}>
        <Text style={styles.author}>
          {dataRcvd?.data?.story['author-name']}
        </Text>
        <SizedBox width={4} />
        <Divider vrtcl={true} />
        <SizedBox width={4} />
        <Text style={styles.author}>
          {dataRcvd?.data?.story['published-at'] &&
            new Date(dataRcvd?.data?.story['published-at']).toDateString()}
        </Text>
      </View>
      <SizedBox height={8} />

      <Divider />
      <SizedBox height={8} />
      {dataRcvd?.data?.story?.cards?.map(item =>
        item['story-elements']
          ?.filter(item => item?.text)
          .map(i => paraGraph(i)),
      )}
      <SizedBox height={8} />
      {dataRcvd?.data?.story['linked-stories'] && (
        <Text style={styles.related}>Related Links</Text>
      )}
      <SizedBox height={4} />
      <FlatList
        data={
          dataRcvd?.data?.story['linked-stories'] &&
          Object?.values(dataRcvd?.data?.story['linked-stories'])
        }
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'black',
    height: height,
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  related: {
    color: 'red',
  },
  center: {
    position: 'absolute',
    top: height / 2.5,
    left: width / 2.5,
  },
  image: {
    width: width - 50,
    height: 180,
    borderRadius: 8,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  sectionText: {
    color: 'red',
    fontSize: 12,
  },
  author: {
    color: 'grey',
    fontSize: 12,
  },
  headLine: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  subheadline: {
    color: 'white',
    fontSize: 12,
  },
});

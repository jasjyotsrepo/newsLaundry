import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import SizedBox from './sizedBox';
import Divider from './divider';

const {width, height} = Dimensions.get('window');

export default function NewsCard({cardDetail, navigation}) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log(cardDetail?.story);
        navigation.navigate('story', {slug: cardDetail?.story?.slug});
      }}>
      <View style={styles.eachCard}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://gumlet.assettype.com/newslaundry%2F2022-06%2Ff4007329-2ab4-43ee-b1ef-c5518763d83b%2FAssam_flood_cheatsheet.jpg?auto=format%2Ccompress&w=1200',
          }}
        />
        <SizedBox height={4} />
        <Text style={styles.headLine}>{cardDetail?.story?.headline}</Text>
        <SizedBox height={4} />
        <Text style={styles.subheadline}>{cardDetail?.story?.subheadline}</Text>
        <SizedBox height={4} />
        <View style={styles.rowView}>
          <Text style={styles.author}>
            {cardDetail?.story?.authors[0]?.name}
          </Text>
          <SizedBox width={4} />
          <Divider vrtcl={true} />
          <SizedBox width={4} />
          <Text style={styles.author}>
            {cardDetail?.story &&
              new Date(cardDetail?.story['published-at']).toDateString()}
          </Text>
        </View>
        <SizedBox height={8} />
        <Divider hzntl={true} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  eachCard: {
    marginBottom: 24,
  },
  image: {
    width: width - 30,
    height: 200,
    borderRadius: 12,
  },
  headLine: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 16,
  },
  subheadline: {
    color: 'white',
    fontSize: 12,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  author: {
    color: 'grey',
    fontSize: 12,
  },
});

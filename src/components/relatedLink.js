import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import SizedBox from './sizedBox';

export default function RelatedLink({details, navigation}) {
  const uri =
    'https://gumlet.assettype.com/newslaundry%2F2022-06%2Ff4007329-2ab4-43ee-b1ef-c5518763d83b%2FAssam_flood_cheatsheet.jpg?auto=format%2Ccompress&w=1200';
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.push('story', {slug: details?.slug})}>
      <View style={{padding: 12}}>
        <Image
          style={styles.image}
          source={{
            uri: uri,
          }}
        />
        <SizedBox height={4} />
        <Text
          style={{
            color: 'yellow',
            maxWidth: 125,
            maxHeight: 80,
            flexWrap: 'wrap',
          }}>
          {details?.headline}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 80,
    borderRadius: 8,
  },
});

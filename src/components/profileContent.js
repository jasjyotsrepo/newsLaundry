import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from './button';
import Detail from './detail';
import SizedBox from './sizedBox';

export default function ProfileContent({userDetails, navigation}) {
  const [usr, setUsr] = useState('');
  const [editDisabled, setEditDisabled] = useState(true);
  const editButtonUri =
    'data:image/png;base64,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';

  const crossButtonUri =
    'https://ak.picdn.net/shutterstock/videos/11968313/thumb/5.jpg';
  useEffect(() => {
    setUsr(userDetails);
  }, [userDetails]);

  console.log('uSRPROFILE', userDetails);
  const handlePress = async () => {
    AsyncStorage.removeItem('user')
      .then(() => navigation.replace('login'))
      .catch(error => console.log('errorLoggingOut', error));
  };
  const handleEmailChange = value => {
    setUsr({...usr, email: value});
  };
  const handleNameChange = value => {
    setUsr({...usr, name: value});
  };
  return (
    <View style={styles.mainView}>
      {editDisabled && (
        <TouchableWithoutFeedback onPress={() => setEditDisabled(false)}>
          <Image style={styles.editBtn} source={{uri: editButtonUri}} />
        </TouchableWithoutFeedback>
      )}
      {!editDisabled && (
        <TouchableWithoutFeedback
          onPress={() => {
            setUsr(userDetails);
            setEditDisabled(true);
          }}>
          <Image style={styles.editBtn} source={{uri: crossButtonUri}} />
        </TouchableWithoutFeedback>
      )}

      <Image
        style={styles.profilePic}
        source={{
          uri: userDetails?.photo,
        }}
      />
      <SizedBox height={10} />
      <Detail
        label={'Name'}
        value={usr?.name}
        handleChange={handleNameChange}
        disabled={editDisabled}
      />
      <SizedBox height={10} />
      <Detail
        label={'Email'}
        value={usr?.email}
        handleChange={handleEmailChange}
        disabled={editDisabled}
      />
      <SizedBox height={24} />
      <Button label={'LOGOUT'} handlePress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  profilePic: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    position: 'relative',
  },
  editBtn: {
    position: 'absolute',
    top: 0,
    right: 10,
    zIndex: 2,
    width: 30,
    height: 30,
    borderRadius: 180,
  },
});

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  AsyncStorage,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const {width, height} = Dimensions.get('window');

export default function Login({navigation, handleNewLgn}) {
  const [userInfo, setUserInfo] = useState({userInfo: '', loggedIn: false});

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '759413760137-8ke9h5s67lutiolccshp42qrn0vivem6.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      loginHint: '',
      forceConsentPrompt: true,
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfoReceived = await GoogleSignin.signIn();
      handleNewLgn();
      AsyncStorage.setItem('user', JSON.stringify(userInfoReceived?.user));
      console.log('LOGIN SUCCESSFUL', userInfoReceived);
      setUserInfo({userInfo: userInfoReceived, loggedIn: true});
      navigation.replace('mainScreens', {userDetails: userInfoReceived?.user});
    } catch (error) {
      console.log('error', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <SafeAreaView style={styles.center}>
      <GoogleSigninButton
        style={styles.sectionContainer}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={() => signIn()}
        disabled={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    position: 'absolute',
    top: height / 2.5,
    left: width / 4,
    paddingHorizontal: 24,
    width: 192,
    height: 48,
  },
  center: {
    position: 'relative',
  },
});

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, AsyncStorage, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/screens/login';
import MainScreens from './src/screens/mainScreens';
import Story from './src/screens/story';
const Stack = createNativeStackNavigator();

const App = () => {
  const [lgdUser, setLgdUser] = useState('');
  const [initialRouteName, setInitialRouteName] = useState('');
  const [newIdLgn, setNewIdLgn] = useState(true);

  const config = {
    title: 'NEWS LAUNDRY',
    headerStyle: {
      backgroundColor: '#FF0000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  const config1 = {
    title: 'STORY',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  useEffect(() => {
    getUser();
  }, [newIdLgn]);

  const handleNewLgn = () => {
    setNewIdLgn(prev => !prev);
  };

  async function getUser() {
    try {
      const usrLgdIn = await AsyncStorage.getItem('user');
      console.log('LGDuser', usrLgdIn);
      if (usrLgdIn) setInitialRouteName('mainScreens');
      else setInitialRouteName('login');
      setLgdUser(await AsyncStorage.getItem('user'));
    } catch (error) {
      console.log('errorInfetchingLoggedUser', error);
    }
  }

  console.log('InitialROu', initialRouteName);

  if (!initialRouteName)
    return (
      <View>
        <Text>Welcome</Text>
      </View>
    );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen name="login" options={{headerShown: false}}>
          {props => <Login {...props} handleNewLgn={handleNewLgn} />}
        </Stack.Screen>
        <Stack.Screen name="mainScreens" options={config}>
          {props => <MainScreens {...props} userDetails={lgdUser} />}
        </Stack.Screen>
        <Stack.Screen name="story" options={config1} component={Story} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

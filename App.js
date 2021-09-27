// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Login'
import Button from './src/Button'
import Post from './src/Post'
import Comment from './src/Comment'
//import BiometricPopup from './src/BiometricPopup'

import { Provider } from 'react-redux';
import store from './src/redux/store'

function HomeScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Button" component={Button} /> 
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Comment" component={Comment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <Provider store={store} >
    <HomeScreen />
    </Provider>
    );
    
}

export default App;
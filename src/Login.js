import React, {useState} from 'react';
import {View, Text,Image, TextInput, Button,PixelRatio, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginUsers} from './redux/action/login';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Submit = () => {
    const data = {email, password};
    dispatch(loginUsers(email, password));
    navigation.navigate('Post');
  };
  return (
    <>
    <View style={{margin: PixelRatio.getPixelSizeForLayoutSize(20)}}>
      <View style={styles.images}>
        <Image source={require('./images/img2.png')} style={{height:'85%', width:'100%'}} />
      </View>
    </View>
    <View style={styles.bottomContainer}>
        <Text style={styles.loginTextStyle}>Login</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Email"
          placeholderTextColor='#484542'
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Password"
          placeholderTextColor='#484542'
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={Submit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{marginVertical: 20}}>
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor='#484542'
          style={styles.input}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={{marginVertical: 20}}>
        <TextInput
          placeholder="Enter Password"
          style={styles.input}
          placeholderTextColor='#484542'
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Button title="Submit" onPress={Submit} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  images: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTextStyle: {
    textAlign: 'center',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    backgroundColor: '#161F28',
    display: 'flex',
    color: '#FFC857',
    padding: PixelRatio.getPixelSizeForLayoutSize(5),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(40),
    bottom: PixelRatio.getPixelSizeForLayoutSize(10),
    borderRadius: 10,
  },
  textInputStyle: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(10),
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    textAlign: 'center',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    borderRadius: 50,
    color: '#000',
    backgroundColor: '#fff',
  },
  statusLabel: {
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(23),
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(10),
    color: '#fff',
  },
  bottomContainer: {
    borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    height: PixelRatio.getPixelSizeForLayoutSize(150),
    width: '100%',
    backgroundColor: '#A50100',
    borderRadius: 40,
  },
  buttonStyle: {
    margin: PixelRatio.getPixelSizeForLayoutSize(8),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: PixelRatio.getPixelSizeForLayoutSize(8),
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(19),
    borderRadius: 30,
    backgroundColor: '#FFC857',
  },
  buttonText: {
    color: '#161F28',
    fontWeight: 'bold',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
  },
});
export default Login;

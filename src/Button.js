import React from 'react';
import {View, Text, Button} from 'react-native';

const Post = ({navigation}) => {
  return (
    <View style={{flexDirection: 'row',justifyContent: 'space-between',margin:40}}>
      <Button title="Post" onPress={() => navigation.navigate('Post')} />
      <Button title="Comment" onPress={() => navigation.navigate('Comment')} />
    </View>
  );
};

export default Post;

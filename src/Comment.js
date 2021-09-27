import React from 'react';
import {View, Text} from 'react-native';

const Comment = props => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <Text style={{margin: 10, fontSize: 18}}>{props.user.id}</Text>
        <Text style={{margin: 10, fontSize: 18}}>{props.user.name}</Text>
        <Text style={{margin: 10, fontSize: 18}}>{props.user.email}</Text>
      </View>
    </>
  );
};

export default Comment;

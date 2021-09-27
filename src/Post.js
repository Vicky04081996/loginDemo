import React ,{useEffect, useState}from 'react'
import { View, Text } from 'react-native'
import { useDispatch , useSelector} from 'react-redux'
import {getUsers} from './redux/action/users'

import Card from './Comment'

const Post = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)
    const data = JSON.stringify(users)
//console.log("jiiiii"+data);
    useEffect(() =>{
        dispatch(getUsers())
    },[])
    
    return (
        <View>
        {users.length >0 && users.map((user)=>{
            return (
                    <Card user={user} key={user.id} />
            )
            
        })}  
        </View>
    )
}

export default Post

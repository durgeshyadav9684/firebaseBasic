import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { logout } from '../firebase/authSevice'

const Profile = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"green"}}>
         <Button title='Log Out' color={'red'} onPress={()=>logout()}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { logout } from '../firebase/authSevice'

const Home = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",gap:50}}>
      <Text>Home</Text>
      <Button title='Log Out' color={'red'} onPress={()=>logout()}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
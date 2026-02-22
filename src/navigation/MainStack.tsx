import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'

const MainStack = () => {
    const Stack =createNativeStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name='home' component={Home}/>
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})
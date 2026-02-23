import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import { image } from '../utils/image';

const MainStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false,tabBarActiveTintColor:"blue" }} >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused,color,size}) => (
            <Image source={image.home} style={{ width: 25, height: 25 }} tintColor={color} />
          ),
          tabBarLabel(props) {
            return <Text style={[{color:props.focused?"blue":"black",fontSize:8},props.focused&&{fontWeight:"bold"}]}>Home</Text>
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused,color,size}) => (
            <Image source={image.profile} style={{ width: 25, height: 25 }} tintColor={color}/>
          ),
               tabBarLabel(props) {
            return <Text style={[{color:props.focused?"blue":"black",fontSize:8},props.focused&&{fontWeight:"bold"}]}>Profile</Text>
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});

import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LogIn';
import RegisterScreen from '../screens/Register';
import { color } from '../utils/color';


export type AuthStackParamlist={
login:undefined;
signUp:undefined

}

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:color.headerColor,
        },
        headerTitleStyle:{
            fontSize:20,
            fontWeight:"medium",
        },
        headerTitleAlign:"center"

    }}>
      <Stack.Screen name="login" component={LoginScreen} options={{
        headerTitle:"Log In"
      }}/>
      <Stack.Screen name="signUp" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

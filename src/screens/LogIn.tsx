import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity, Image } from 'react-native';
import { login } from '../firebase/authSevice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamlist } from '../navigation/AuthStack';
import { image } from '../utils/image';
import { googleLogin } from '../firebase/googleAuth';
import { facebookLogin } from '../firebase/facebookLogin';


type LoginNavProp =NativeStackNavigationProp<AuthStackParamlist,"login">

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginNavProp>();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Enter email & password');
      return;
    }

    try {
      await login(email, password);
      Alert.alert('Success', 'Logged in!');
      navigation.reset({
        index: 0,
        routes: [{ name: 'home' }],
      });
    } catch (e: any) {
      Alert.alert('Login Failed', e.message);
    }
  };

  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>

      {/* EMAIL */}
      <Text style={{textAlign:"left",width:"90%",paddingVertical:12}}>Email</Text>
      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 20, padding: 10,width:"90%",color:"black",borderRadius:8 }}
        placeholderTextColor={'black'}
      />

      {/* PASSWORD */}
      <Text style={{textAlign:"left",width:"90%",paddingVertical:12}}>Password</Text>
      <TextInput
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 20, padding: 10,width:"90%",color:"black",borderRadius:8 }}
        placeholderTextColor={'black'}
      />

      {/* LOGIN BUTTON */}
      <TouchableOpacity onPress={handleLogin} style={{
        width:"90%",
        paddingVertical:16,
        borderRadius:8,
        backgroundColor:"blue",
        marginTop:20,
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Text style={{color:"white",fontSize:20}}>Login</Text>
      </TouchableOpacity>

      {/* SIGNUP LINK */}
      <TouchableOpacity onPress={()=>navigation.navigate("signUp")} style={{width:'90%'}}>
        <Text style={{
          color:"gray",
          fontSize:18,
          fontWeight:"bold",
          textDecorationLine:"underline",
          textAlign:"center",
          marginTop:20
        }}>
          Sign Up
        </Text>
      </TouchableOpacity>

      {/* SOCIAL LOGIN */}
      <View style={{
        width:'90%',
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"center",
        gap:20,
        marginTop:30
      }}>

        {/* GOOGLE */}
        <TouchableOpacity
          style={{width:30,height:30}}
          onPress={async () => {
            try {
              await googleLogin();
              navigation.reset({
                index: 0,
                routes: [{ name: 'home' }],
              });
            } catch (e: any) {
              Alert.alert('Google Login Failed', e.message);
            }
          }}
        >
          <Image source={image.google} style={{width:30,height:30}}/>
        </TouchableOpacity>

        {/* FACEBOOK */}
        <TouchableOpacity
          style={{width:35,height:35}}
          onPress={async () => {
  try {
    const res = await facebookLogin();
    console.log("FB SUCCESS:", res);
    navigation.reset({ index: 0, routes: [{ name: 'home' }] });
  } catch (e:any) {
    console.log("FB ERROR FULL:", e);
    Alert.alert("FB ERROR", JSON.stringify(e));
  }
}}
        >
          <Image source={image.facebook} style={{width:35,height:35}}/>
        </TouchableOpacity>

      </View>
    </View>
  );
}
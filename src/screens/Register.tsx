import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { signUp } from '../firebase/authSevice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamlist } from '../navigation/AuthStack';


type RegisterNavProp = NativeStackNavigationProp<AuthStackParamlist, 'signUp'>;

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<RegisterNavProp>();

  const handleSignup = async () => {
    try {
      await signUp(email, password);
      Alert.alert('Account created!');
      navigation.navigate('login'); 
    } catch (e: any) {
      Alert.alert('Signup Failed', e.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
      />
      <Button title="Register" onPress={handleSignup} />
    </View>
  );
}
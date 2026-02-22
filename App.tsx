import { StatusBar, StyleSheet, Alert } from 'react-native'
import React, { useEffect } from 'react'
import RootStack from './src/navigation/RootStack'
import { NavigationContainer } from '@react-navigation/native'
import { configureGoogleSignin } from './src/firebase/config/googleSignin'
import messaging from '@react-native-firebase/messaging';

const App = () => {

  // Google sign-in setup
  useEffect(()=>{
    configureGoogleSignin()
  },[])

  // Firebase setup
  useEffect(() => {

    async function init() {

      // Ask notification permission
      const authStatus = await messaging().requestPermission();

      console.log("Permission status:", authStatus);

      // Get device token
      const token = await messaging().getToken();
      console.log("FCM TOKEN =", token);
    }

    init();

    // Foreground notifications handler
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log("Foreground message:", remoteMessage);

      Alert.alert(
        remoteMessage.notification?.title || "Notification",
        remoteMessage.notification?.body || "You received a message"
      );
    });

    // When app opened from background notification
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Opened from background:', remoteMessage);
    });

    // When app opened from killed state
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Opened from quit state:', remoteMessage);
        }
      });

    return unsubscribe;

  }, []);

  return (
    <NavigationContainer>
      <StatusBar translucent barStyle={"dark-content"} backgroundColor={'red'} />
      <RootStack/>
    </NavigationContainer>
  )
}

export default App
const styles = StyleSheet.create({})